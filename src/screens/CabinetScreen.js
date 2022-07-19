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

const {width, height} = Dimensions.get('screen');
class CabinetScreen extends Component {
  constructor(props) {
    super(props);
    this.bgAnimate = new Animated.Value(0);
  }
  componentDidMount() {}
  render() {
    return (
      <Animated.View
        style={{
          ...styles.root,
          backgroundColor: this.props.appTheme.gray.gray_2,
        }}>
        <ThemeToggle />
        <TouchableOpacity>
          <Text>ds</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height,
  },
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
