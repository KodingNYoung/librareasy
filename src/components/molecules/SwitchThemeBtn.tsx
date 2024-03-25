"use client";
import { ThemeMode } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import React from "react";
import Icon from "../atoms/Icon";
import { useThemeMode } from "@/hooks/themeHooks";

const SwitchThemeBtn: FC = () => {
  const { switchMode, mode } = useThemeMode();
  return (
    <button onClick={switchMode}>
      <Icon name={mode === ThemeMode.DARK ? "icon-sun" : "icon-moon-01"} />
    </button>
  );
};

export default SwitchThemeBtn;
