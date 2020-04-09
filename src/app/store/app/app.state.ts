export interface State {
  theme: string;
  device: string;
  sidebarOpened: boolean;
}

export const initialState: State = {
  theme: 'light',
  device: 'others',
  sidebarOpened: false,
};
