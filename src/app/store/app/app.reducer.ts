import { createReducer, on } from '@ngrx/store';

import { setTheme, setDarkTheme } from './app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(setDarkTheme, (state, { darkTheme }) => {
    return { theme: darkTheme ? 'dark' : 'light' };
  }),
  on(setTheme, (state) => {
    return { theme: state.theme === 'light' ? 'dark' : 'light' };
  })
);
