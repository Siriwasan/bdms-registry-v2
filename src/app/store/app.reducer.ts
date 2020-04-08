import { createReducer, on } from '@ngrx/store';
import { setTheme } from './app.actions';

export const initialState = '';

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state) => 'dark')
);
