import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './app.state';

export const selectAppState = createFeatureSelector<State>('app');

export const appTheme = createSelector(selectAppState, (state) => state.theme);
