import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CabinetScreen from '../screens/CabinetScreen';
import HomeScreen from '../screens/HomeScreen';
import routNames from './routNames';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {StyleSheet, Text, View} from 'react-native';
const Tab = createBottomTabNavigator();
const TabNavigation = ({appTheme}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === routNames.HOME_SCREEN) {
            iconName = 'home';
          } else if (route.name === routNames.CABINET_SCREEN) {
            iconName = 'user';
          }
          return (
            <Icon name={iconName} size={24} color={appTheme.gray.gray_8} />
          );
        },
        tabBarLabel: ({focused, color}) => {
          let label;
          if (route.name === routNames.HOME_SCREEN) {
            label = routNames.HOME_SCREEN;
          } else if (route.name === routNames.CABINET_SCREEN) {
            label = routNames.CABINET_SCREEN;
          }
          return (
            <Text
              style={{
                color: appTheme.gray.gray_8,
                fontSize: 12,
              }}>
              {label}
            </Text>
          );
        },
        tabBarBackground: () => (
          <View
            style={{
              ...styles.tabBar,
              backgroundColor: appTheme.gray.gray_2,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: appTheme.gray.gray_2,
        },
        headerTitleStyle: {
          color: appTheme.gray.gray_8,
          fontSize: 18,
        },
      })}>
      <Tab.Screen name={routNames.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routNames.CABINET_SCREEN} component={CabinetScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: '100%',
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
});
export default connect(mapStateToProps, null)(TabNavigation);
