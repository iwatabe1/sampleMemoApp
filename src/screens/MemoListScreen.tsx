import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import {
  collection,
  getFirestore,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { Memos } from '../types/memos';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListScreen(props: any) {
  const { navigation } = props;
  const [memos, setMemos] = useState([] as any);
  const [isLoading, setLoading] = useState(false);

  // ログインボタンの呼び出し
  useEffect(
    () => {
      navigation.setOptions({
        headerRight: () => <LogOutButton />,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // MemoListデータ取得
  useEffect(
    () => {
      const db = getFirestore();
      const auth = getAuth();
      let unsubscribe;

      if (auth.currentUser) {
        setLoading(true);
        const ref = query(
          collection(db, `users/${auth.currentUser.uid}/memos`),
          orderBy('updatedAt', 'desc'),
        );
        // onSnapshotを使うとデータ更新を監視できる
        unsubscribe = onSnapshot(
          ref,
          (snapshot) => {
            const userMemos: Memos[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              userMemos.push({
                id: doc.id,
                bodyText: data.bodyText,
                updatedAt: data.updatedAt.toDate(),
              });
            });
            setMemos(userMemos);
            setLoading(false);
          },
          () => {
            setLoading(false);
            Alert.alert('データの読み込みに失敗しました。');
          },
        );
        return unsubscribe;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しましょう</Text>
          <Button
            style={emptyStyles.button}
            label='作成する'
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
          ></Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <MemoList memos={memos} />
      <CircleButton
        name={'plus'}
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
}

// CSSのコンポーネント
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
