import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector('count');

export const count = createSelector(selectCounterState, (state) => state);
