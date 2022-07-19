import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import ThemeToggle from './components/ThemeToggle';
import {FocusAwareStatusBar} from '../navigation/TabNavigation';
import theme from '../UI/theme';
import BaseAppliocationScreen from '../BaseComponents/BaseAppliocationScreen';
import Icon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('screen');
class CabinetScreen extends BaseAppliocationScreen {
  constructor(props) {
    super(props);
    this.bgAnimate = new Animated.Value(0);
  }
  render() {
    const {appTheme, navigation} = this.props;
    return (
      <Animated.View
        style={{
          ...styles.root,
          backgroundColor: appTheme.gray.gray_2,
        }}>
        {this.renderCabinetHeader(appTheme, navigation)}
        <View style={{...styles.content_root}}></View>
        <View style={{...styles.bottom_root}}></View>

        <FocusAwareStatusBar
          barStyle={
            this.props.appTheme === theme.dark
              ? 'light-content'
              : 'dark-content'
          }
          backgroundColor={this.props.appTheme.gray.gray_2}
        />
        <TouchableOpacity>
          <Text>ds</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height,
  },
  header_root: {},
  content_root: {},
  bottom_root: {},
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinetScreen);
