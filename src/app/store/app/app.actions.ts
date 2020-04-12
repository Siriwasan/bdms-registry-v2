import { createAction, props } from '@ngrx/store';

export const setDarkTheme = createAction(
  '[Application] SET_DARK_THEME',
  props<{ darkTheme: boolean }>()
);
export const toggleTheme = createAction('[Application] SET_THEME');
export const setDevice = createAction('[Application] SET_DEVICE', props<{ newDevice: string }>());
export const openSidebar = createAction('[Application] OPEN_SIDEBAR', props<{ open: boolean }>());
export const toggleSidebar = createAction('[Application] TOGGLE_SIDEBAR');
