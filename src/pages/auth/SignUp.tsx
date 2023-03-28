import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { TextInput, Button, Flex, } from "@react-native-material/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../../firebase'
import { Link } from "@react-navigation/native";
import { User } from "../../models/user";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

type Props = {
  navigation: any;
}

const SignUpComponent: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUserData(auth.currentUser)
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

  const setUserData = async (user: any) => {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    const collection = await setDoc(doc(db, `users/${user.uid}`), userData).then(() => { console.log('Success adding resource')}).catch(error => console.log('error adding resource: ', error))
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
      <Text>Already have an account?</Text>
      <Link to={'/SignIn'}>Go to Sign In</Link>
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
