import { createReducer, on } from '@ngrx/store';

import { setTheme, setDarkTheme, setDevice, openSidebar, toggleSidebar } from './app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(setDarkTheme, (state, { darkTheme }) => {
    return { ...state, theme: darkTheme ? 'dark' : 'light' };
  }),
  on(setTheme, (state) => {
    return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
  }),
  on(setDevice, (state, { newDevice }) => {
    return { ...state, device: newDevice };
  }),
  on(openSidebar, (state, { open }) => {
    return { ...state, sidebarOpened: open };
  }),
  on(toggleSidebar, (state) => {
    return { ...state, sidebarOpened: !state.sidebarOpened };
  })
);
