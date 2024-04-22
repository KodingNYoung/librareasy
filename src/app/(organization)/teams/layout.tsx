"use client";
import { Routes } from "@/utilities/enums";
import { LayoutFC } from "@/utilities/types";
import { Tab, Tabs } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const Teams: LayoutFC = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="p-2.5 sm:p-5 py-2.5 sm:py-4">
      <Tabs
        aria-label="teams tabs"
        selectedKey={pathname}
        variant="underlined"
        classNames={{
          base: "w-full",
          tabList: "border-b border-divider p-0 w-full",
          cursor: "w-full",
          tab: "max-w-fit"
        }}
      >
        <Tab key={Routes.USERS} title="Users" href={Routes.USERS} />
        <Tab
          key={Routes.ORGANIZATIONS}
          title="Organizations"
          href={Routes.ORGANIZATIONS}
        />
      </Tabs>
      {children}
    </div>
  );
};

export default Teams;
