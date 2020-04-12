import { createAction, props } from '@ngrx/store';

export const setDarkTheme = createAction(
  '[Application] SET_DARK_THEME',
  props<{ darkTheme: boolean }>()
);
export const toggleTheme = createAction('[Application] SET_THEME');
export const setDevice = createAction('[Application] SET_DEVICE', props<{ newDevice: string }>());
export const openNavbar = createAction('[Application] OPEN_NAVBAR', props<{ open: boolean }>());
export const toggleNavbar = createAction('[Application] TOGGLE_NAVBAR');
export const closeNavbar = createAction('[Application] CLOSE_NAVBAR');
export const openSidebar = createAction('[Application] OPEN_SIDEBAR', props<{ open: boolean }>());
export const toggleSidebar = createAction('[Application] TOGGLE_SIDEBAR');
export const closeSidebar = createAction('[Application] CLOSE_SIDEBAR');
