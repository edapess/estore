import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

export class CartScreen extends Component {
  render() {
    return (
      <View>
        <Text>CartScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
