export interface State {
  theme: string;
  device: string;
  navbarOpened: boolean;
  sidebarOpened: boolean;
}

export const initialState: State = {
  theme: 'light',
  device: 'others',
  navbarOpened: true,
  sidebarOpened: true,
};
