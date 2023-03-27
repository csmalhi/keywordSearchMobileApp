import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { User } from "../models/user";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase'

// const { user } = useAuth();
// const user = false


const Router = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user: any) => {
      console.log('is there a user', user)
      if (user) setUser(user);
      if (initializing) setInitializing(false);
    }, (error) => {
      console.log(error)
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {
        user ?
          <UserStack /> 
          :
          <AuthStack />
      }
    </NavigationContainer>
  );
}

const mapStateToProps = (state: any) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
