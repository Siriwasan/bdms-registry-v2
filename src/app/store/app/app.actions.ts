import { createAction, props } from '@ngrx/store';

export const setDarkTheme = createAction(
  '[Application] SET_DARK_THEME',
  props<{ darkTheme: boolean }>()
);
export const setTheme = createAction('[Application] SET_THEME');
