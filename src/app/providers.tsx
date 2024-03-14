"use client";
import { FC } from "@/utilities/types";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const Providers: FC = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
