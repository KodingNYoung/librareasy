"use client";
import { ThemeModeProvider } from "@/hooks/themeHooks";
import { FC } from "@/utilities/types";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const Providers: FC = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeModeProvider>{children}</ThemeModeProvider>
    </NextUIProvider>
  );
};

export default Providers;
