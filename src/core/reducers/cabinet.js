import {authConstants} from '../constants/authConstants';

const initialState = {
  cabinetDetailsForm: {
    name: '',
    email: '',
    gender: '',
    birthday: '',
    number: '',
  },
};
const cabinet = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_FORM_CHANGE:
      return {
        ...state,
        cabinetDetailsForm: {
          ...state.cabinetDetailsForm,
          name:
            action.payload.inputName === 'name'
              ? action.payload.inputValue
              : state.cabinetDetailsForm.name,
          email:
            action.payload.inputName === 'email'
              ? action.payload.inputValue
              : state.cabinetDetailsForm.email,
          gender:
            action.payload.inputName === 'gender'
              ? action.payload.inputValue
              : state.cabinetDetailsForm.gender,
          birthday:
            action.payload.inputName === 'birthday'
              ? action.payload.inputValue
              : state.cabinetDetailsForm.birthday,
          number:
            action.payload.inputName === 'number'
              ? action.payload.inputValue
              : state.cabinetDetailsForm.number,
        },
      };

    default:
      return state;
  }
};

export default cabinet;
