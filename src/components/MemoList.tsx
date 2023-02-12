import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import { dateToString } from '../utils/DateUtil';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function MemoList(props: any) {
  const { memos } = props;
  const navigation = useNavigation();

  function deleteMemo(id) {
    const auth = getAuth();
    if (auth.currentUser) {
      const db = getFirestore();
      const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
      Alert.alert('メモを削除します', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {
            return null;
          },
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            deleteDoc(ref).catch(() => {
              Alert.alert('削除に失敗しました');
            });
          },
        },
      ]);
    }
  }

  function renderItem({ item }: any) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail' as never, { id: item.id } as never);
        }}
      >
        <View>
          <Text
            style={styles.memoListItemTitle}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>
            {dateToString(item.updatedAt)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            deleteMemo(item.id);
          }}
        >
          <Feather name='x' size={16} color='#B0B0B0'></Feather>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(
    shape({ id: string, bodyText: string, updatedAt: instanceOf(Date) }),
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
