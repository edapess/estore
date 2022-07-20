import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import routNames from '../navigation/routNames';
export default class BaseAuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  goToLoginScreen(navigation) {
    navigation.navigate(routNames.LOGIN_SCREEN);
  }
  renderDevButton({navigation}) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.replace('TabNavigation');
        }}>
        <Text>go to register</Text>
      </TouchableOpacity>
    );
  }
}
