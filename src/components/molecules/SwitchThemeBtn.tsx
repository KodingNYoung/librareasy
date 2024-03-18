"use client";
import { useThemeMode } from "@/hooks/themeHooks";
import { ThemeMode } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import React from "react";
import Icon from "../atoms/Icon";

const SwitchThemeBtn: FC = () => {
  const { switchMode, mode } = useThemeMode();
  return (
    <button onClick={switchMode}>
      <Icon name={mode === ThemeMode.DARK ? "icon-sun" : "icon-moon-01"} />
    </button>
  );
};

export default SwitchThemeBtn;
