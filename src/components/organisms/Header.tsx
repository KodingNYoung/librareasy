"use client";
import { FC } from "@/utilities/types";
import React, { useContext } from "react";
import SwitchThemeBtn from "../molecules/SwitchThemeBtn";
import AppSelect from "../molecules/AppSelect";
import { SidebarColllapseContext } from "@/contexts/layout";
import Icon from "../atoms/Icon";
import { Button } from "@nextui-org/react";

const Header: FC = () => {
  const { toggleCollapse } = useContext(SidebarColllapseContext);

  return (
    <header className="w-full h-[88px] sm:h-[90px] sticky z-10 top-0 left-0 sm:left-[263px] backdrop-blur-sm px-2.5 sm:px-5 flex items-center">
      <div className="bg-white dark:bg-neutral-800 rounded px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center gap-2 w-full">
        <Button
          isIconOnly
          variant="light"
          onClick={toggleCollapse}
          className="sm:hidden"
        >
          <Icon name="icon-menu-03" />
        </Button>
        <h1>Header</h1>
        <div className="flex-1" />
        <div>
          <AppSelect
            options={[{ value: "kodingnyoung", label: "KodingNYoung" }]}
            variant="bordered"
          />
        </div>
        <SwitchThemeBtn />
      </div>
    </header>
  );
};

export default Header;
