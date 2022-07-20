import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import routNames from './routNames';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import registrationModal from '../screens/modals/registrationModal';
import CabinetDetailsScreen from '../screens/CabinetDetailsScreen';
import {connect} from 'react-redux';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';

const Stack = createNativeStackNavigator();
const StackNavigator = ({appTheme}) => {
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
        <Stack.Screen
          options={({route}) => ({
            headerTitle: routNames.CABINET_DETAILS_SCREEN,
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: appTheme.gray.gray_2,
            },
            headerTitleStyle: {
              color: appTheme.gray.gray_8,
              fontSize: 18,
            },
          })}
          name={routNames.CABINET_DETAILS_SCREEN}
          component={CabinetDetailsScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="registrationModal" component={registrationModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
});
export default connect(mapStateToProps, null)(StackNavigator);
