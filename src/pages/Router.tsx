import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import AuthStack from "./auth/AuthStack";
import UserStack from "./UserStack";
import {auth} from '../../firebase'

const Router = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user: any) => {
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
        user ? <UserStack /> : <AuthStack />
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
