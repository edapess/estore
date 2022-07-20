import {cabinetConstants} from '../constants/cabinetConstants';

export const cabinetFormChange = (inputObject, inputValue) => {
  return {
    type: cabinetConstants.CABINET_FORM_CHANGE,
    payload: {
      inputName: inputObject.name,
      inputValue: inputValue,
    },
  };
};
