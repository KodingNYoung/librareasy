import { FC } from "@/utilities/types";
import { createContext, useState } from "react";

type SidebarCollapseContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

export const SidebarColllapseContext =
  createContext<SidebarCollapseContextType>({
    isCollapsed: true,
    toggleCollapse: () => {},
  });

export const SidebarCollapseProvider: FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleCollapse = () => {
    setIsCollapsed(curr => !curr);
  };
  return (
    <SidebarColllapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </SidebarColllapseContext.Provider>
  );
};
