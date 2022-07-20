import {createSelector} from '@reduxjs/toolkit';

const cabinetStateSelector = state => state.cabinet;

export const cabinetDetailsFormSelector = createSelector(
  cabinetStateSelector,
  cabinet => cabinet.cabinetDetailsForm,
);
