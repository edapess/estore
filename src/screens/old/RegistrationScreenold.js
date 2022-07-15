import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import BaseAuthClass from '../../BaseComponents/BaseAuthClass';
import {
  authRegistration,
  registrationFormChange,
} from '../../core/actions/AuthActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';
import {
  authDataSelector,
  authSignUpFormSelector,
  isRegistrationLoadingSelector,
  isSignUpButtonDisabledSelector,
  registrationErrorSelector,
  registrationStatusSelector,
} from '../../core/selectors/AuthSelectors';
import FormService from '../../services/FormService';
import RegistrationForm from './RegistrationFormOld';

const {width, height} = Dimensions.get('screen');

class RegistrationScreenOld extends Component {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  renderinputRow(inputObject) {
    if (typeof inputObject === 'function') {
      return null;
    }
    return (
      <RegistrationForm inputObject={inputObject} key={inputObject.index} />
    );
  }

  getForm() {
    return this.formService.getRegistrationForm(this.props.signUpForm);
  }

  goToRegistration() {
    this.props.userRegistration(this.props.signUpForm);
    this.renderAfterRegistration();
  }
  renderAfterRegistration() {
    const {registrationStatus, registrationError, isRegistrationLoading} =
      this.props;
    if (registrationError) {
      return <Text>{registrationError + registrationStatus}</Text>;
    } else if (isRegistrationLoading) {
      return <ActivityIndicator />;
    } else {
      this.setAppRoot(this.props.appTheme);
    }
  }
  render() {
    const {appTheme, isSignUpButtonDisabled} = this.props;
    return (
      <ScrollView
        contentContainerStyle={{
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
            onPress={() => this.goToLoginScreen(this.props.componentId)}>
            <Text style={{...styles.signIn_text, color: appTheme.blue.blue_1}}>
              Already have an account? Sign in
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
  authProps: authDataSelector(state),
  isSignUpButtonDisabled: isSignUpButtonDisabledSelector(state),
  signUpForm: authSignUpFormSelector(state),
  isRegistrationLoading: isRegistrationLoadingSelector(state),
  registrationStatus: registrationStatusSelector(state),
  registrationError: registrationErrorSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    userRegistration: userInfo => dispatch(authRegistration(userInfo)),
    registrationFormChange: (key, value) =>
      dispatch(registrationFormChange(key, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationScreenOld);
