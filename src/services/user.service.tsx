import {auth} from "../../firebase";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { User } from "../models/user";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut, GoogleAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import React, {useEffect} from 'react'

 const UserService = () => {

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: '34925350284-4f6o9u3d2useajasplc7q4d10k53f1ac.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   });    
  // }, []);



  const forgotPassword = (passwordResetEmail: string) => {
    sendPasswordResetEmail(auth, passwordResetEmail)
      .then(() => {
        console.log("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const isLoggedIn = () => {
    // const user = JSON.parse(AsyncStorage.getItem('user')!);
    // return user !== null && user.emailVerified !== false ? true : false;
  }

  const googleAuth = async () => {
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = GoogleAuthProvider.credential(idToken);
      // try {
      //   await GoogleSignin.hasPlayServices();
      //   const userInfo = await GoogleSignin.signIn();
      //   console.log('userInfo', userInfo)
      // } catch (error: FirebaseError) {
      //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //     // user cancelled the login flow
      //   } else if (error.code === statusCodes.IN_PROGRESS) {
      //     // operation (e.g. sign in) is in progress already
      //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //     // play services not available or outdated
      //   } else {
      //     // some other error happened
      //   }
      // }
  }
  // const setUserData = (user: any) {
  //   const userRef: any = db().doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified,
  //   };
  //   return userRef.set(userData, {
  //     merge: true,
  //   });
  // },
  const userSignOut = () => {
    signOut(auth).then(() => console.log("User signed out!"));
  }
};
