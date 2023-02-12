import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CircleButton from '../components/CircleButton';
import { shape, string } from 'prop-types';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { Memos } from '../types/memos';
import { dateToString } from '../utils/DateUtil';

export default function MemoDetailScreen(props: any) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState({} as Memos);

  useEffect(
    () => {
      const auth = getAuth();
      const db = getFirestore();
      let unsubscribe;
      if (auth.currentUser) {
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
        unsubscribe = onSnapshot(ref, (doc) => {
          const data = doc.data();
          setMemo({
            id: id,
            bodyText: data?.bodyText,
            updatedAt: data?.updatedAt.toDate(),
          });
        });
      }
      return unsubscribe;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1} ellipsizeMode='tail'>
          {memo && memo.bodyText}
        </Text>
        <Text style={styles.memoDate}>
          {memo && dateToString(memo.updatedAt)}
        </Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>{memo && memo.bodyText}</Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name={'edit-2'}
        onPress={() => {
          navigation.navigate('MemoEdit', {
            id: memo.id,
            bodyText: memo.bodyText,
          });
        }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
