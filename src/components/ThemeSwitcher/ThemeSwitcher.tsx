import { THEMES } from "@/constants/themes";
import { useThemeStore } from "@/hooks";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeSwticher = () => {
  const { theme, updateTheme } = useThemeStore();

  const isLight = theme === THEMES.THEME_LIGHT;

  const handleClick = () => {
    const newTheme = isLight ? THEMES.THEME_DARK : THEMES.THEME_LIGHT;
    updateTheme(newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={() => handleClick()}
        checked={!isLight}
      />
      <HiMoon
        className="swap-off fill-current w-10 h-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      />
      <HiSun
        className="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      />
    </label>
  );
};
