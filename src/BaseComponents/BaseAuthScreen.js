import React from 'react';
import routNames from '../navigation/routNames';
export default class BaseAuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  goToLoginScreen(navigation) {
    navigation.navigate(routNames.LOGIN_SCREEN);
  }
}
