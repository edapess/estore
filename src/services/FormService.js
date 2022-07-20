import AppValidator from './AppValidator';

export default class FormService {
  constructor() {
    this.validator = new AppValidator();
  }
  getRegistrationForm(form) {
    const registrationForm = {
      isCorrect: () => {
        return this.validator.registrationFormIsCorrectValidator(form);
      },
      name: {
        index: 0,
        name: 'name',
        required: true,
        value: form?.name,
        label: 'name',
        placeholder: 'please enter your name',
      },
      email: {
        index: 1,
        name: 'email',
        required: true,
        value: form?.email,
        label: 'email',
        placeholder: 'please enter your email',
        validator: email => {
          if (!email) {
            return null;
          }

          if (this.validator.validateEmail(email)) {
            return null;
          } else {
            return 'email is incorrect';
          }
        },
      },
      number: {
        index: 2,
        name: 'number',
        required: true,
        value: form?.number,
        label: 'number',
        placeholder: 'please enter your phone number',
      },
      password: {
        index: 3,
        name: 'password',
        required: true,
        value: form?.password,
        label: 'password',
        placeholder: 'please enter your password',
        validator: password => {
          if (!password) {
            return null;
          }

          return this.validator.validateRegistrationPassword(password);
        },
      },
      password_repeat: {
        index: 4,
        name: 'password_repeat',
        required: true,
        value: form?.password_repeat,
        label: 'password_repeat',
        placeholder: 'please repeat your password',
        validator: () => {
          if (form.password !== form.password_repeat) {
            return "passwords doesn't match";
          }
        },
      },
    };
    return registrationForm;
  }
  getLoginForm(form) {
    const loginForm = {
      isCorrect: () => {
        return this.validator.logInFormIsCorrectValidator(form);
      },
      email: {
        index: 0,
        name: 'email',
        required: true,
        value: form?.email,
        label: 'email',
        placeholder: 'please enter your email',
        validator: email => {
          if (!email) {
            return null;
          }

          if (this.validator.validateEmail(email)) {
            return null;
          } else {
            return 'email is incorrect';
          }
        },
      },
      password: {
        index: 1,
        name: 'password',
        required: true,
        value: form?.password,
        label: 'password',
        placeholder: 'please enter your password',
        validator: password => {
          if (!password) {
            return null;
          }

          return this.validator.validateRegistrationPassword(password);
        },
      },
    };
    return loginForm;
  }
  getCabinetForm(form, targetInputIndex) {
    let cabinetForm = {
      name: {
        index: 0,
        name: 'name',
        required: true,
        value: form?.name,
        label: 'name',
        placeholder: 'please enter your name',
      },
      email: {
        index: 1,
        name: 'email',
        required: true,
        value: form?.email,
        label: 'email',
        placeholder: 'please enter your email',
        validator: email => {
          if (!email) {
            return null;
          }

          if (this.validator.validateEmail(email)) {
            return null;
          } else {
            return 'email is incorrect';
          }
        },
      },
      gender: {
        index: 2,
        name: 'gender',
        required: true,
        value: form?.gender,
        label: 'gender',
        placeholder: 'please enter your gender',
      },
      birthday: {
        index: 3,
        name: 'birthday',
        required: true,
        value: form?.gender,
        label: 'birthday',
        placeholder: '__ - __ - ____',
      },
      number: {
        index: 4,
        name: 'number',
        required: true,
        value: form?.number,
        label: 'number',
        placeholder: 'please enter your phone number',
      },
    };
    return cabinetForm;
  }
}
