import { ThemeModeContext } from "@/contexts/theme";
import { useContext } from "react";

export const useThemeMode = () => useContext(ThemeModeContext);
