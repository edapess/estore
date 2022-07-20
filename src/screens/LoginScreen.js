import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {authLogIn} from '../core/actions/AuthActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {
  authLogInFormSelector,
  isLogInButtonDisabledSelector,
} from '../core/selectors/AuthSelectors';
import FormService from '../services/FormService';
import LogInForm from './components/LogInForm';
import Icon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('screen');

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  getForm() {
    return this.formService.getLoginForm(this.props.logInForm);
  }
  renderinputRow(inputObject) {
    if (typeof inputObject === 'function') {
      return null;
    }
    return <LogInForm inputObject={inputObject} key={inputObject.index} />;
  }
  logIn() {
    this.props.logIn(this.props.logInForm);
  }
  render() {
    const {appTheme, logInButtonIsDisabled} = this.props;
    return (
      <View
        style={{
          ...styles.root,
          backgroundColor: appTheme.blue.blue_4,
        }}>
        <View style={{...styles.textInputs_root}}>
          {Object.values(this.getForm()).map(inputObject =>
            this.renderinputRow(inputObject),
          )}
          <TouchableHighlight
            disabled={false}
            style={{
              ...styles.button,
              backgroundColor: logInButtonIsDisabled
                ? appTheme.gray.gray_8
                : appTheme.gray.gray_2,
            }}
            onPress={() => this.logIn()}>
            <Text
              style={{
                ...styles.button_text,
                color: logInButtonIsDisabled
                  ? appTheme.blue.blue_1
                  : appTheme.blue.blue_5,
              }}>
              Log In
            </Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          underlayColor={appTheme.blue.blue_4}
          onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="leftcircle"
            size={23}
            color={appTheme.blue.blue_3}
            style={styles.goBack_button}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs_root: {
    width: width * 0.9,
    height: height * 0.25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: width * 0.3,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  goBack_button: {
    marginTop: 15,
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
  logInForm: authLogInFormSelector(state),
  logInButtonIsDisabled: isLogInButtonDisabledSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    logIn: logInObject => dispatch(authLogIn(logInObject)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
