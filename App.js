/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/core/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routNames from './src/navigation/routNames';
import RegistrationScreen from './src/screens/RegistrationScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HOME">
          <Stack.Screen
            name={routNames.REGISTRATION_SCREEN}
            component={RegistrationScreen}
          />
          <Stack.Screen name={routNames.HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
