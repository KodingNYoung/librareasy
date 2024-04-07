"use client";
import { ThemeMode } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import React from "react";
import Icon from "../atoms/Icon";
import { useThemeMode } from "@/hooks/themeHooks";
import { Button, ButtonProps } from "@nextui-org/react";

type Props = ButtonProps & {};

const SwitchThemeBtn: FC<Props> = ({ variant = "light" }) => {
  const { switchMode, mode } = useThemeMode();
  return (
    <Button onClick={switchMode} className="" variant={variant} isIconOnly>
      <Icon name={mode === ThemeMode.DARK ? "icon-sun" : "icon-moon-01"} />
    </Button>
  );
};

export default SwitchThemeBtn;
