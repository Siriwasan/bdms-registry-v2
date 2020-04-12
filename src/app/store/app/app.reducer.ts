import { createReducer, on } from '@ngrx/store';

import {
  toggleTheme,
  setDarkTheme,
  setDevice,
  openNavbar,
  toggleNavbar,
  closeNavbar,
  openSidebar,
  toggleSidebar,
  closeSidebar,
} from './app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(setDarkTheme, (state, { darkTheme }) => {
    return { ...state, theme: darkTheme ? 'dark' : 'light' };
  }),
  on(toggleTheme, (state) => {
    return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
  }),
  on(setDevice, (state, { newDevice }) => {
    return { ...state, device: newDevice };
  }),
  on(openNavbar, (state, { open }) => {
    return { ...state, navbarOpened: open };
  }),
  on(toggleNavbar, (state) => {
    return {
      ...state,
      navbarOpened: !state.navbarOpened,
      sidebarOpened: state.device === 'handset' ? false : state.sidebarOpened,
    };
  }),
  on(closeNavbar, (state) => {
    return { ...state, navbarOpened: state.device === 'handset' ? false : state.navbarOpened };
  }),
  on(openSidebar, (state, { open }) => {
    return { ...state, sidebarOpened: open };
  }),
  on(toggleSidebar, (state) => {
    return {
      ...state,
      sidebarOpened: !state.sidebarOpened,
      navbarOpened: state.device === 'handset' ? false : state.navbarOpened,
    };
  }),
  on(closeSidebar, (state) => {
    return { ...state, sidebarOpened: state.device === 'handset' ? false : state.sidebarOpened };
  })
);
