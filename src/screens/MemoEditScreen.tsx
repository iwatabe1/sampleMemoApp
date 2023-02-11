import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props: any) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <KeyboardAvoidingView style={styles.container} behavior='height'>  */}
      <View style={styles.inputContainer}>
        <TextInput
          value='買い物リスト'
          multiline
          style={styles.input}
        ></TextInput>
      </View>
      <CircleButton
        name='check'
        onPress={() => {
          navigation.goBack();
        }}
      ></CircleButton>
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
