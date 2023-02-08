import { StyleSheet, View } from 'react-native';
import React from 'react';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoListScreen from './src/screens/MemoListScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
// import MemoCreateScreen from './src/screens/MemoCreateScreen';
// import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  // 画面のコンポーネント
  return <SignUpScreen />;
  // return <LogInScreen />;
  // return <MemoCreateScreen />;
  // return <MemoEditScreen />;
  // return <MemoListScreen />;
  // return <MemoDetailScreen />;
}

// CSSのコンポーネント
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
});
