import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppBar from './src/component/AppBar';
import MemoList from './src/component/MemoList';
import CircleButton from './src/component/CircleButton';

export default function App() {
  // 画面のコンポーネント
  return (
    <View style={styles.container}>
      <AppBar></AppBar>

      <MemoList></MemoList>

      <CircleButton>+</CircleButton>
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
