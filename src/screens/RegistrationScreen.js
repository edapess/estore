import {Component} from 'react';
import * as React from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  authRegistration,
  registrationFormChange,
} from '../core/actions/AuthActions';
import {appThemeSelector} from '../core/selectors/AppThemeSelectors';
import {
  authDataSelector,
  authSignUpFormSelector,
  isRegistrationLoadingSelector,
  isSignUpButtonDisabledSelector,
  registrationDataSelector,
  registrationErrorSelector,
  registrationStatusSelector,
} from '../core/selectors/AuthSelectors';
import routNames from '../navigation/routNames';
import FormService from '../services/FormService';
import RegistrationForm from './RegistrationForm';
const {width, height} = Dimensions.get('screen');

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  getForm() {
    return this.formService.getRegistrationForm(this.props.signUpForm);
  }
  renderinputRow(inputObject) {
    if (typeof inputObject === 'function') {
      return null;
    }
    return (
      <RegistrationForm inputObject={inputObject} key={inputObject.index} />
    );
  }
  goToRegistration() {
    const {navigation, userRegistration, signUpForm} = this.props;
    userRegistration(signUpForm);
    navigation.replace('TabNavigation');
  }
  goToLoginScreen() {
    const {navigation, registrationError} = this.props;
    navigation.navigate(routNames.LOGIN_SCREEN);
  }
  render() {
    const {
      appTheme,
      isSignUpButtonDisabled,
      registrationError,
      isRegistrationLoading,
    } = this.props;
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
            disabled={isSignUpButtonDisabled}
            style={{
              ...styles.button,
              backgroundColor: isSignUpButtonDisabled
                ? appTheme.gray.gray_8
                : appTheme.gray.gray_2,
            }}
            onPress={() => this.goToRegistration()}>
            <Text
              style={{
                ...styles.button_text,
                color: isSignUpButtonDisabled
                  ? appTheme.blue.blue_1
                  : appTheme.blue.blue_5,
              }}>
              Sign Up
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.goToLoginScreen()}
            underlayColor={appTheme.blue.blue_4}>
            <Text style={{...styles.signIn_text, color: appTheme.blue.blue_1}}>
              Already have an account? Sign in
            </Text>
          </TouchableHighlight>
          <Text style={{...styles.error_text, color: appTheme.red.red_4}}>
            {registrationError &&
              'something went wrong through registration, please check form details'}
          </Text>
        </View>
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
    height: height * 0.6,
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
  signIn_text: {
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  error_text: {
    fontSize: 12,
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
  authProps: authDataSelector(state),
  isSignUpButtonDisabled: isSignUpButtonDisabledSelector(state),
  signUpForm: authSignUpFormSelector(state),
  isRegistrationLoading: isRegistrationLoadingSelector(state),
  registrationStatus: registrationStatusSelector(state),
  registrationError: registrationErrorSelector(state),
  registrationInfo: registrationDataSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    userRegistration: userInfo => dispatch(authRegistration(userInfo)),
    registrationFormChange: (key, value) =>
      dispatch(registrationFormChange(key, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
