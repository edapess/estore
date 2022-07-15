import theme from '../../UI/theme';
import {themeConstants} from '../constants/themeConstants';

const initialState = {
  theme: theme.light,
  buttonTranslate: 0,
};

const appTheme = (state = initialState, action) => {
  switch (action.type) {
    case themeConstants.TOGGLE_DARK_THEME:
      return {
        ...state,
        theme: action.payload,
        buttonTranslate: 36,
      };
    case themeConstants.TOGGLE_LIGHT_THEME:
      return {
        ...state,
        theme: action.payload,
        buttonTranslate: 0,
      };
    default:
      return state;
  }
};
export default appTheme;
