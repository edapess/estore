import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import routNames from './routNames';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import registrationModal from '../screens/modals/registrationModal';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={routNames.REGISTRATION_SCREEN}
          component={RegistrationScreen}
        />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name={routNames.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="registrationModal" component={registrationModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
