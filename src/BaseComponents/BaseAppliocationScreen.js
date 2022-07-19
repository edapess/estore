import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';

export default class BaseApplicationClass extends React.Component {
  constructor(props) {
    super(props);
  }
  renderLoading() {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  renderProductsError(errorMessage) {
    return (
      <View>
        <Text>{errorMessage}</Text>
      </View>
    );
  }
}
