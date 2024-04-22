import { ThemeMode } from "@/utilities/enums";
import { cls } from "@/utilities/helpers";
import { FC } from "@/utilities/types";
import { createContext, useState } from "react";
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
  return (
    <ThemeModeContext.Provider value={{ mode: themeMode, switchMode }}>
      <body className={cls(themeMode)}>
        <main>{children}</main>
        <ToastContainer
          position="top-center"
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
      </body>
    </ThemeModeContext.Provider>
  );
};
