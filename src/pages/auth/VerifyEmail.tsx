import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Button, Flex, } from "@react-native-material/core";
import { Link } from "@react-navigation/native";
import { sendEmailVerification } from "firebase/auth";
import { auth } from '../../../firebase'

type Props = {
  navigation: any;
}

const VerifyEmailComponent: React.FC<Props> = ({ navigation }) => {
  const sendVerification = () => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser).then(() => {
        // this.router.navigate(['verify-email-address']);
      });
    }
  }

  return (
    <Flex style={[styles.media]}>
      <Button title={'Send Verification Email'}
        onPress={() => sendVerification()}
      ></Button>
      <Text>Please verify your email address.</Text>
      // TODO: if verified then enable sign in or create an auto sign in flow once verified
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

export default VerifyEmailComponent;
