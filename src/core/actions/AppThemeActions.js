import theme from '../../UI/theme';
import {themeConstants} from '../constants/themeConstants';

export const toggleDarkTheme = () => {
  return {
    type: themeConstants.TOGGLE_DARK_THEME,
    payload: theme.dark,
  };
};

export const toggleLightTheme = () => {
  return {type: themeConstants.TOGGLE_LIGHT_THEME, payload: theme.light};
};
