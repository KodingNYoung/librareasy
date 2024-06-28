import { ThemeMode } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import { createContext, useEffect, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ThemeModeContextType = {
  mode: ThemeMode;
  switchMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: ThemeMode.LIGHT,
  switchMode: () => {}
});

export const ThemeModeProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.DARK);
  const switchMode = () => {
    setThemeMode(curr =>
      curr === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };
  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.remove("dark");
    html?.classList.remove("light");
    html?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeModeContext.Provider value={{ mode: themeMode, switchMode }}>
      {children}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={themeMode}
        transition={Slide}
      />
    </ThemeModeContext.Provider>
  );
};
