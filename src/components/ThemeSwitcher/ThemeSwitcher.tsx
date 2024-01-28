import { THEMES } from "../../constants/themes";
import { useThemeStore } from "../../hooks";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeSwticher = () => {
  const { theme, updateTheme } = useThemeStore();

  const handleClick = () => {
    const newTheme =
      theme === THEMES.THEME_LIGHT ? THEMES.THEME_DARK : THEMES.THEME_LIGHT;
    updateTheme(newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={() => handleClick()}
      />

      <HiSun
        className="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      />
      <HiMoon
        className="swap-on fill-current w-10 h-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      />
    </label>
  );
};
