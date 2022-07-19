import {authConstants} from '../constants/authConstants';

const initialState = {
  auth: {},
  signUpButtonIsDisabled: true,
  logInButtonIsDisabled: true,
  error: '',
  loading: true,
  config: {},
  status: '',
  signUpForm: {
    name: '',
    email: '',
    number: '',
    password: '',
    password_repeat: '',
  },
  logInForm: {
    email: '',
    password: '',
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.RESET_FORM:
      return {
        ...state,
        error: '',
        status: '',
        signUpForm: {
          name: '',
          email: '',
          number: '',
          password: '',
          password_repeat: '',
        },
        logInForm: {
          email: '',
          password: '',
        },
      };
    case authConstants.SIGNUP_FORM_CHANGE:
      return {
        ...state,
        error: '',
        signUpForm: {
          ...state.signUpForm,
          name:
            action.payload.inputName === 'name'
              ? action.payload.inputValue
              : state.signUpForm.name,
          email:
            action.payload.inputName === 'email'
              ? action.payload.inputValue
              : state.signUpForm.email,
          number:
            action.payload.inputName === 'number'
              ? action.payload.inputValue
              : state.signUpForm.number,
          password:
            action.payload.inputName === 'password'
              ? action.payload.inputValue
              : state.signUpForm.password,
          password_repeat:
            action.payload.inputName === 'password_repeat'
              ? action.payload.inputValue
              : state.signUpForm.password_repeat,
        },
        loading: true,
      };
    //------ IS ENABLE TO SEND REGISTRATION REQUEST
    case authConstants.SIGNUP_FORM_CORRECT:
      return {
        ...state,
        signUpButtonIsDisabled: action.disabledToRegister,
      };
    case authConstants.SIGNUP_FORM_ERROR:
      return {
        ...state,
        signUpButtonIsDisabled: action.disabledToRegister,
      };
    case authConstants.LOGIN_FORM_CORRECT:
      return {
        ...state,
        logInButtonIsDisabled: action.disabledToLogIn,
      };
    case authConstants.LOGIN_FORM_ERROR:
      return {
        ...state,
        logInButtonIsDisabled: action.disabledToLogIn,
      };
    //---------
    case authConstants.USER_REGISTRATION:
      return {
        ...state,
        loading: action.loading,
      };
    case authConstants.USER_REGISTRATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case authConstants.USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
        config: JSON.parse(action.payload.config.data),
        status: action.payload.data.status,
      };
    //---------
    case authConstants.USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case authConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
        // config: JSON.parse(action.payload.config.data),
        // status: action.payload.data.status,
      };
    //---------
    case authConstants.LOGIN_FORM_CHANGE:
      return {
        ...state,
        logInForm: {
          ...state.logInForm,
          email:
            action.payload.inputName === 'email'
              ? action.payload.inputValue
              : state.logInForm.email,
          password:
            action.payload.inputName === 'password'
              ? action.payload.inputValue
              : state.logInForm.password,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
