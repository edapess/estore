import AuthApiService from '../../ApiServices/AuthApiService';
import AppValidator from '../../services/AppValidator';
import {authConstants} from '../constants/authConstants';

const validator = new AppValidator();

export const authRegistration = authObject => async dispatch => {
  try {
    dispatch({type: authConstants.USER_REGISTRATION, loading: true});
    const response = await AuthApiService.userRegistration(authObject);
    dispatch({
      type: authConstants.USER_REGISTRATION_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({type: authConstants.USER_REGISTRATION_ERROR, error: error});
  }
};
export const registrationFormChange = (inputObject, inputValue) => {
  return {
    type: authConstants.SIGNUP_FORM_CHANGE,
    payload: {
      inputName: inputObject.name,
      inputValue: inputObject.validator
        ? inputValue
        : validator.validateUserInputs(inputObject.name, inputValue),
    },
  };
};

export const canRegister = isFormCorrect => {
  if (isFormCorrect) {
    return {
      type: authConstants.SIGNUP_FORM_CORRECT,
      disabledToRegister: false,
    };
  } else {
    return {
      type: authConstants.SIGNUP_FORM_ERROR,
      disabledToRegister: true,
    };
  }
};
//---------
export const authLogIn = authObject => async dispatch => {
  try {
    dispatch({type: authConstants.USER_LOGIN, loading: true});
    const response = await AuthApiService.userLogin(authObject);
    dispatch({
      type: authConstants.USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({type: authConstants.USER_LOGIN_ERROR, error: error});
  }
};
export const LogInFormChanged = (inputObject, inputValue) => {
  return {
    type: authConstants.LOGIN_FORM_CHANGE,
    payload: {
      inputName: inputObject.name,
      inputValue: inputObject.validator
        ? inputValue
        : validator.validateUserInputs(inputObject.name, inputValue),
    },
  };
};
export const canLogIn = isFormCorrect => {
  if (isFormCorrect) {
    return {
      type: authConstants.LOGIN_FORM_CORRECT,
      disabledToLogIn: false,
    };
  } else {
    return {
      type: authConstants.LOGIN_FORM_ERROR,
      disabledToLogIn: true,
    };
  }
};
