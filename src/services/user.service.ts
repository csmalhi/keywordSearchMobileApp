import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import firestore from '@react-native-firebase/firestore';
import { User } from "../models/user";

GoogleSignin.configure({
  webClientId: "",
  offlineAccess: true,
});

const UserService = {
  signIn: function (email: string, password: string) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  },
  signUp: function (email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
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
  },
  sendVerificationEmail: function () {
    auth()
      .currentUser?.sendEmailVerification()
      .then(() => {
        // this.router.navigate(['verify-email-address']);
      });
  },
  forgotPassword: function (passwordResetEmail: string) {
    auth()
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        console.log("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  isLoggedIn: function () {
    // const user = JSON.parse(AsyncStorage.getItem('user')!);
    // return user !== null && user.emailVerified !== false ? true : false;
  },
  googleAuth: async function () {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  },
  setUserData: function (user: any) {
    const userRef: any = firestore().doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
      return userRef.set(userData, {
        merge: true,
      });
  },
  signOut: function () {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  },
};

export default UserService;
