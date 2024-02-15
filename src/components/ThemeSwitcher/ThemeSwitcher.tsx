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
    <label className="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        value={theme}
        onChange={() => handleClick()}
        checked={!isLight}
      />
      <HiSun
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      />
      <HiMoon
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      />
    </label>
  );
};
