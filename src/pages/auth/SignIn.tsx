import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { TextInput, Button, Flex, } from "@react-native-material/core";
import { Link } from "@react-navigation/native";
import {auth} from '../../../firebase'
import UserService from "../../services/user.service";

type Props = {
  navigation: any;
}

const SignInComponent: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (email: string, password: string) => {
    UserService.signIn(auth, email, password)
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
      <Button title={'Sign In'}
        onPress={() => signIn(email, password)}
      ></Button>
      <Link to={'/ForgotPassword'}>Forgot Password?</Link>
      <Text>Don't have an account?</Text>
      <Link to={'/SignUp'}>Go to Sign Up</Link>
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

export default SignInComponent;
