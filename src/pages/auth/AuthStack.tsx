import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';
import VerifyEmailComponent from './VerifyEmail';
import ForgotPasswordComponent from './ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpComponent} />
      <Stack.Screen name="SignIn" component={SignInComponent} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailComponent} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordComponent} />
    </Stack.Navigator>
  );
}

export default AuthStack;
