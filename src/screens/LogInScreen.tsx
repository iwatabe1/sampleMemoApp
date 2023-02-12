import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../components/Button';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import Loading from '../components/Loading';

export default function LogInScreen(props: any) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('Unmount');
    };
  }, []);

  // propsが変更されると実行される関数
  useEffect(
    () => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
        } else {
          setLoading(false);
        }
      });
      // 画面を離れる前にユーザーのstateをキャンセルする
      return unsubscribe;
    },
    // 空の配列を第二引数に入れて一度だけ実行されるようになる
    [],
  );

  function handlePress() {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        Alert.alert(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize='none' // 先頭大文字を解除
          keyboardType='email-address'
          placeholder={'Email-Address'}
          textContentType='emailAddress' // iOSで登録されたデータを補完してくれる
        ></TextInput>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize='none'
          placeholder={'Password'}
          secureTextEntry // パスワードをマスキング
          textContentType='password' // iOSで登録されたデータを補完してくれる
        ></TextInput>
        <Button label='Submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({ index: 0, routes: [{ name: 'SignUp' }] });
            }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
