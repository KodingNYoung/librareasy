"use client";
import { FC } from "@/utilities/types";
import React from "react";
import SwitchThemeBtn from "../molecules/SwitchThemeBtn";
import AppSelect from "../molecules/AppSelect";

const Header: FC = () => {
  return (
    <header className="w-full h-28 sm:h-[90px] sticky z-10 top-0 left-0 sm:left-[263px] backdrop-blur-sm p-5">
      <div className="bg-white dark:bg-neutral-800 rounded px-4 py-3 flex justify-between items-center gap-2">
        <h1>Header</h1>
        <div className="flex-1" />
        <div>
          <AppSelect
            options={[{ value: "kodingnyoung", label: "KodingNYoung" }]}
          />
        </div>
        <SwitchThemeBtn />
      </div>
    </header>
  );
};

export default Header;
