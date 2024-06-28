"use client";
import { ThemeModeProvider } from "@/contexts/theme";
import { FC } from "@/utilities/types";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const Providers: FC = ({ children }) => {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeModeProvider>{children}</ThemeModeProvider>
    </NextUIProvider>
  );
};

export default Providers;
