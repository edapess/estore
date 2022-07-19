import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import routNames from '../navigation/routNames';
import ThemeToggle from '../screens/components/ThemeToggle';

const {width, height} = Dimensions.get('screen');

export default class BaseApplicationScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  renderCabinetHeader(appTheme, navigation) {
    return (
      <View style={{...styles.header_root}}>
        <ThemeToggle />
        <Icon
          name="setting"
          size={24}
          color={appTheme.gray.gray_8}
          onPress={() => navigation.navigate(routNames.CABINET_DETAILS_SCREEN)}
        />
      </View>
    );
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
const styles = StyleSheet.create({
  header_root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.1,
    width: width,
    paddingHorizontal: 15,
  },
});
