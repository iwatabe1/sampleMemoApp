import { StyleSheet, View } from 'react-native';
import React from 'react';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  // 画面のコンポーネント
  return <MemoListScreen />;
  // return <MemoDetailScreen />;
}

// CSSのコンポーネント
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
});
