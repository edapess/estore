import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {
  canRegister,
  registrationFormChange,
} from '../../core/actions/AuthActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';
import {
  authLogInFormSelector,
  authSignUpFormSelector,
} from '../../core/selectors/AuthSelectors';
import FormService from '../../services/FormService';

const {width, height} = Dimensions.get('screen');

export class RegistrationFormOld extends Component {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  changeText(inputObject, text) {
    this.props.registrationFormChange(inputObject, text);
  }
  componentDidUpdate() {
    this.props.isEnabledToRegister(
      this.formService.getRegistrationForm(this.props.signUpForm).isCorrect(),
    );
  }
  inputValidationText(object) {
    if (object.validator) {
      return object.validator(object.value);
    }
  }

  render() {
    const {inputObject, appTheme} = this.props;
    return (
      <View>
        <TextInput
          key={inputObject.index}
          name={inputObject.name}
          id={inputObject.name + inputObject.index}
          autoCorrect={false}
          style={{
            ...styles.text_input,
            backgroundColor: appTheme.gray.gray_2,
            color: appTheme.blue.blue_4,
          }}
          placeholder={inputObject.placeholder}
          onChangeText={text => this.changeText(inputObject, text)}
          value={inputObject.value}
        />
        <Text style={{...styles.validation_message, color: appTheme.red.red_4}}>
          {this.inputValidationText(inputObject)}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text_input: {
    width: width * 0.7,
    height: 60,
    borderRadius: 10,
    padding: 5,
  },
  validation_message: {
    fontSize: 11,
    marginLeft: 10,
  },
});
const mapStateToProps = state => ({
  appTheme: appThemeSelector(state),
  signUpForm: authSignUpFormSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    registrationFormChange: (key, value) =>
      dispatch(registrationFormChange(key, value)),
    isEnabledToRegister: isFormCorrect => dispatch(canRegister(isFormCorrect)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationFormOld);
