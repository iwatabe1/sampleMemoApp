import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <AppBar></AppBar>
      <View style={styles.inputContainer}>
        <TextInput
          value='買い物リスト'
          multiline
          style={styles.input}
        ></TextInput>
      </View>
      <CircleButton name='check'></CircleButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
