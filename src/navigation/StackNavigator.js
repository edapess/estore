import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import routNames from './routNames';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={routNames.REGISTRATION_SCREEN}
        component={RegistrationScreen}
      />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name={routNames.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
