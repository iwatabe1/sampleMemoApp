import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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
import { Memos } from '../type/memos';

export default function MemoListScreen(props: any) {
  const { navigation } = props;
  const [memos, setMemos] = useState([] as any);
  // ログインボタンの呼び出し
  useEffect(() => {
    console.log('useEffect');
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  // MemoListデータ取得
  useEffect(() => {
    console.log('useEffect');
    const db = getFirestore();
    const auth = getAuth();
    let unsubscribe;

    if (auth.currentUser) {
      const ref = query(
        collection(db, `users/${auth.currentUser.uid}/memos`),
        orderBy('updatedAt', 'desc'),
      );
      unsubscribe = onSnapshot(
        ref,
        (snapshot) => {
          const userMemos: Memos[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            console.log(doc.id, doc.data());
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
        },
        (e) => {
          console.log(e);
          Alert.alert('データの読み込みに失敗しました。');
        },
      );
      return unsubscribe;
    }
  }, []);

  return (
    <View style={styles.container}>
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
