import React, {Component} from 'react';
import {Animated, StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {
  toggleDarkTheme,
  toggleLightTheme,
} from '../../core/actions/AppThemeActions';
import {
  appButtonTranslate,
  appThemeSelector,
} from '../../core/selectors/AppThemeSelectors';
import theme from '../../UI/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
class ThemeToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translate: new Animated.Value(0),
    };
  }

  toggleLightTheme() {
    Animated.timing(this.state.translate, {
      toValue: 36,
      duration: 500,
      useNativeDriver: false,
    }).start();

    this.props.toggleLightTheme();
  }

  //TODO play with navigation theme changing
  toggleDarkTheme() {
    Animated.timing(this.state.translate, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    this.props.toggleDarkTheme();
  }

  toggleTheme() {
    this.props.appTheme === theme.dark
      ? this.toggleLightTheme()
      : this.toggleDarkTheme();
  }
  render() {
    const {appTheme} = this.props;
    return (
      <TouchableHighlight
        onPress={() => this.toggleTheme()}
        underlayColor="none"
        style={{...styles.root, backgroundColor: appTheme.blue.blue_1}}>
        <FeatherIcon
          size={24}
          color={appTheme.orange.orange_4}
          name={appTheme === theme.dark ? 'moon' : 'sun'}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 1,
    paddingRight: 1,
  },
  toggle: {
    width: 40,
    height: 36,
    borderRadius: 20,
  },
});
const mapStateToProps = state => {
  return {
    appTheme: appThemeSelector(state),
    buttonTranslate: appButtonTranslate(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDarkTheme: () => dispatch(toggleDarkTheme()),
    toggleLightTheme: () => dispatch(toggleLightTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
