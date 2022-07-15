import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {canLogIn, LogInFormChanged} from '../../core/actions/AuthActions';
import {appThemeSelector} from '../../core/selectors/AppThemeSelectors';
import {authLogInFormSelector} from '../../core/selectors/AuthSelectors';
import FormService from '../../services/FormService';

const {width, height} = Dimensions.get('screen');

export class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.formService = new FormService();
  }
  changeText(inputObject, text) {
    this.props.logInFormChange(inputObject, text);
  }
  inputValidationText(object) {
    console.log(object);
    if (object.validator) {
      return object.validator(object.value);
    }
  }
  componentDidUpdate() {
    this.props.isEnabledToLogIn(
      this.formService.getLoginForm(this.props.logInForm).isCorrect(),
    );
  }
  render() {
    const {appTheme, inputObject} = this.props;
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
  logInForm: authLogInFormSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    logInFormChange: (inputObject, inputValue) =>
      dispatch(LogInFormChanged(inputObject, inputValue)),
    isEnabledToLogIn: isFormCorrect => dispatch(canLogIn(isFormCorrect)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
