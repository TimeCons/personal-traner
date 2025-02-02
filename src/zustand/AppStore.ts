import { create } from "zustand";

export enum Screen {
  linkTree,
  coachingOnline,
  personalTrainer,
  collaborazioni,
  about,
  sheets,
}

interface AppState {
  screen: Screen;
}

interface AppActions {
  setScreen: (screen: Screen) => void;
}

const initialState: AppState = {
  screen: Screen.linkTree,
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  ...initialState,
  setScreen: (screen: Screen) => set({ screen }),
}));
