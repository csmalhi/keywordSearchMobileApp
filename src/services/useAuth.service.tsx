import React, { useState, useEffect} from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {auth} from '../../firebase'

export const useAuth = () => {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
    // const unsubscribeFromAuthStatusChanged = 
    onAuthStateChanged(auth, (user) => {
      console.log('use auth', user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // setUser(user);
      } else {
        // User is signed out
        // setUser(undefined);
      }
    });

    // return unsubscribeFromAuthStatusChanged;
  // }, []);

  // return {
    // user
  // };r
}
