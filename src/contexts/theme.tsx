import { ThemeMode } from "@/utilities/enums";
import { cls } from "@/utilities/helpers";
import { FC } from "@/utilities/types";
import { createContext, useState } from "react";

type ThemeModeContextType = {
  mode: ThemeMode;
  switchMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: ThemeMode.LIGHT,
  switchMode: () => {},
});

export const ThemeModeProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.DARK);
  const switchMode = () => {
    setThemeMode(curr =>
      curr === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };
  return (
    <ThemeModeContext.Provider value={{ mode: themeMode, switchMode }}>
      <main className={cls(themeMode)}>{children}</main>
    </ThemeModeContext.Provider>
  );
};
