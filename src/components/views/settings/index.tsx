"use client";
import { FC } from "@/utilities/types";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import Profile from "./Profile";
import Password from "./Password";

const Settings: FC = () => {
  return (
    <div className="p-2.5 sm:p-5 py-2.5 sm:py-4">
      <Tabs
        variant="underlined"
        classNames={{
          base: "w-full",
          tabList: "border-b border-divider p-0 w-full",
          cursor: "w-full",
          tab: "max-w-fit",
          panel: "flex justify-center sm:py-10"
        }}
      >
        <Tab key="profile" title="Profile">
          <Profile />
        </Tab>
        <Tab key="password" title="Password">
          <Password />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Settings;
