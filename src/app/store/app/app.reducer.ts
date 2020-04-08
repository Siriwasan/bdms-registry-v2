import { createReducer, on } from '@ngrx/store';

import { setTheme } from './app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state, action) => {
    return { theme: state.theme === 'light' ? 'dark' : 'light' };
  })
);
