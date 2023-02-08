import React from 'react';
import { View, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props: any) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList></MemoList>
      <CircleButton
        name={'plus'}
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      >
        +
      </CircleButton>
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
