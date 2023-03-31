import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Button, Flex, TextInput, } from "@react-native-material/core";
import { Link } from "@react-navigation/native";
import {auth} from '../../../firebase'
import UserService from "../../services/user.service";

type Props = {
  navigation: any;
}

const ForgotPasswordComponent: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('')

  const sendPasswordReset = () => {
    UserService.forgotPassword(auth, email)
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
      <Button title={'Send Password Reset Email'}
        onPress={() => sendPasswordReset()}
      ></Button>
      <Text>Please verify your email address.</Text>
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

export default ForgotPasswordComponent;
