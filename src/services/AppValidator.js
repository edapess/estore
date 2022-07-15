export default class AppValidator {
  constructor() {}
  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  isEmailCorrect(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (ema) {

    // }
    return String(email).toLowerCase().match(re);
  }
  validatePhoneNumber(key, value) {
    if (key === 'name') {
      let validName = value.replace(/[^a-zA-Z]+/g, '');
      return validName;
    }
  }

  validateUserInputs(key, value) {
    if (key === 'name') {
      let validName = value.replace(/[^a-zA-Z]+/g, '');
      return validName;
    }
    if (key === 'number') {
      let validNumber = value.replace(/[^0-9]+/g, '');
      return validNumber;
    }
  }
  validateRegistrationPassword(password) {
    if (!password.match(/[A-Z]/)) {
      return 'Min 1 uppercase letter';
    }
    if (!password.match(/[a-z]/)) {
      return ' Min 1 lowercase letter';
    }
    if (!password.match(/\d/)) {
      return ' Min 1 number';
    }
    if (!password.match(/[#$@!%&*?]/)) {
      return ' Min 1 special character';
    }
    if (password.length < 8) {
      return ' Min 8 characters';
    } else if (password.length > 16) {
      return 'Max 16 characters';
    }
  }
  registrationFormIsCorrectValidator(form) {
    let passReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (
      form.name.value !== '' &&
      form.email.value !== '' &&
      this.isEmailCorrect(form.email) &&
      form.password.value !== '' &&
      form.password.match(passReg) &&
      form.password_repeat === form.password
    ) {
      return true;
    }
    return false;
  }
  logInFormIsCorrectValidator(form) {
    let passReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (
      form.email.value !== '' &&
      this.isEmailCorrect(form.email) &&
      form.password.value !== '' &&
      form.password.match(passReg)
    ) {
      return true;
    }
    return false;
  }
}
