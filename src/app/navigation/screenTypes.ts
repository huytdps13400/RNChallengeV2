export enum APP_SCREEN {
  MAIN = 'MAIN',
  HOME = 'HOME',
  DRAG_SORT = 'DRAG_SORT',
  BUTTON_3D = 'BUTTON_3D',
}
export type HomeParamList = {
  [APP_SCREEN.DRAG_SORT]: undefined;
  [APP_SCREEN.BUTTON_3D]: undefined;
};

export type RootStackParamList = Partial<HomeParamList>;
