import { StyleSheet, View } from 'react-native';
import React from 'react';
// import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default function App() {
  // 画面のコンポーネント
  return <MemoDetailScreen />;
}

// CSSのコンポーネント
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
});
