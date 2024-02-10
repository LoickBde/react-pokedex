import { create } from "zustand";
import { THEMES } from "@/constants/themes";
import { persist } from "zustand/middleware";
import { LS_RP_STORE_THEME } from "@/constants";

type ThemeType = (typeof THEMES)[keyof typeof THEMES];

type State = {
  theme: ThemeType;
};

type Action = {
  updateTheme: (theme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>()(
  persist(
    (set) => ({
      theme: THEMES.THEME_LIGHT,
      updateTheme: (theme) => set(() => ({ theme })),
    }),
    {
      name: LS_RP_STORE_THEME,
    }
  )
);
