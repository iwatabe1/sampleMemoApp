import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { getAuth } from 'firebase/auth';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { shape, string } from 'prop-types';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils/DateUtil';

export default function MemoEditScreen(props: any) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const auth = getAuth();
    if (auth.currentUser) {
      const db = getFirestore();
      const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
      setDoc(ref, { bodyText: body, updatedAt: new Date() }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((e) => {
          Alert.alert(e.code);
        });
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <KeyboardAvoidingView style={styles.container} behavior='height'>  */}
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBody(text);
          }}
        ></TextInput>
      </View>
      <CircleButton name='check' onPress={handlePress}></CircleButton>
    </KeyboardAvoidingView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
