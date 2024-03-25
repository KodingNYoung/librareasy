"use client";

import { SidebarCollapseProvider } from "@/contexts/layout";
import { FC } from "@/utilities/types";

const Providers: FC = ({ children }) => {
  return <SidebarCollapseProvider>{children}</SidebarCollapseProvider>;
};

export default Providers;
