import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
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
