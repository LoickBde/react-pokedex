import { create } from "zustand";
import { THEMES } from "../constants/themes";

type ThemeType = (typeof THEMES)[keyof typeof THEMES];

type State = {
  theme: ThemeType;
};

type Action = {
  updateTheme: (theme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>((set) => ({
  theme: THEMES.THEME_LIGHT,
  updateTheme: (theme) => set(() => ({ theme })),
}));
