import {createSelector} from '@reduxjs/toolkit';
const stateSelector = state => state;
export const appThemeSelector = createSelector(
  stateSelector,
  state => state.appTheme.theme,
);
export const appButtonTranslate = createSelector(
  stateSelector,
  state => state.appTheme.buttonTranslate,
);
