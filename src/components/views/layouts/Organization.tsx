import LogoutBtn from "@/components/molecules/LogoutBtn";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import { FC } from "@/utilities/types";
import React from "react";

const OrganizationLayout: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen text-slate-900 dark:text-white bg-[#F4F7FE] dark:bg-neutral-900 transition-colors">
      <Sidebar logoutBtn={<LogoutBtn />} />
      <div className="w-full sm:pl-[260px] h-full">
        <Header />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default OrganizationLayout;
