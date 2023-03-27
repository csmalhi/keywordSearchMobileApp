import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Button, Flex, } from "@react-native-material/core";
import { Link } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase'

type Props = {
  navigation: any;
}

const ForgotPasswordComponent: React.FC<Props> = ({ navigation }) => {
  // TODO: get user email
  const email = ''
  const sendPasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Flex style={[styles.media]}>
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
