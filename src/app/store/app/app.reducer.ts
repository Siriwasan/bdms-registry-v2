import { createReducer, on } from '@ngrx/store';

import {
  toggleTheme,
  setDarkTheme,
  setDevice,
  setNavbarMode,
  openNavbar,
  toggleNavbar,
  closeNavbar,
  setSidebarMode,
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

  // Navbar
  on(setNavbarMode, (state, { mode }) => {
    return { ...state, navbarMode: mode };
  }),
  on(openNavbar, (state, { open }) => {
    return { ...state, navbarOpened: open };
  }),
  on(toggleNavbar, (state) => {
    return {
      ...state,
      navbarOpened: !state.navbarOpened,
      sidebarOpened: state.sidebarMode === 'over' ? false : state.sidebarOpened,
    };
  }),
  on(closeNavbar, (state) => {
    return { ...state, navbarOpened: state.device === 'handset' ? false : state.navbarOpened };
  }),

  // Sidebar
  on(setSidebarMode, (state, { mode }) => {
    return { ...state, sidebarMode: mode };
  }),
  on(openSidebar, (state, { open }) => {
    return { ...state, sidebarOpened: open };
  }),
  on(toggleSidebar, (state) => {
    return {
      ...state,
      sidebarOpened: !state.sidebarOpened,
      navbarOpened: state.navbarMode === 'over' ? false : state.navbarOpened,
    };
  }),
  on(closeSidebar, (state) => {
    return { ...state, sidebarOpened: state.device === 'handset' ? false : state.sidebarOpened };
  })
);
