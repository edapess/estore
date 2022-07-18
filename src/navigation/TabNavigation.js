import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CabinetScreen from '../screens/CabinetScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import routNames from './routNames';
import {Icon} from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routNames.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routNames.CABINET_SCREEN} component={CabinetScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
