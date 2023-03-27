import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { TextInput, Button, Flex, } from "@react-native-material/core";
import { Link } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useNavigation } from '@react-navigation/native';

type Props = {
  navigation: any;
}

const SignUpComponent: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User account created & signed in!");
        navigation.navigate('Verify Email')

      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  }

  const googleSignIn = () => {
    console.log('TODO: sign in w google btn')
  }

  return (
    <Flex style={[styles.media]}>
      <TextInput
        label="Email"
        variant="outlined"
        value={email}
        onChangeText={setEmail}
        autoComplete="email"
        autoFocus={true}
        inputMode="email"
      />
      <TextInput
        label="Password"
        variant="outlined"
        value={password}
        onChangeText={setPassword}
        autoComplete="password"
        secureTextEntry={true}
      />
      <Button title={'Sign Up'}
        onPress={() => signUp(email, password)}
      ></Button>
      <Text>Or</Text>

      <Button title={'Google Sign In'}
        onPress={() => googleSignIn()}
      ></Button>
      <Text>Already have an account?</Text>
      <Button title={'Sign In'}
        onPress={() => navigation.navigate('SignIn')}
      ></Button>
    </Flex>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 10,
  },
  media: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 5,
    paddingTop: 40,
    height: 600,
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
});

export default SignUpComponent;
