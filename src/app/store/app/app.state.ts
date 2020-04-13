export interface State {
  theme: string;
  device: string;
  navbarMode: string;
  navbarOpened: boolean;
  sidebarMode: string;
  sidebarOpened: boolean;
}

export const initialState: State = {
  theme: 'light',
  device: 'others',
  navbarMode: 'side',
  navbarOpened: true,
  sidebarMode: 'side',
  sidebarOpened: true,
};
