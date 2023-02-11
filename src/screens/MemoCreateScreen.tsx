import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import CircleButton from '../components/CircleButton';

import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function MemoCreateScreen(props: any) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  async function handlePress() {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const docRef = await addDoc(
        collection(db, `users/${auth.currentUser?.uid}/memos`),
        {
          bodyText,
          updatedAt: new Date(),
        },
      );
      console.log('Document written with ID: ', docRef.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <KeyboardAvoidingView style={styles.container} behavior='height'>  */}
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        ></TextInput>
      </View>
      <CircleButton name='check' onPress={handlePress}></CircleButton>
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
