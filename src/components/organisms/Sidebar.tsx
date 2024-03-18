import { FC } from "@/utilities/types";
import React from "react";

const Sidebar: FC = () => {
  return (
    <aside className="max-w-full w-full h-[calc(100%_-_56px)] sm:h-full sm:w-[260px] flex-col  fixed flex transition-all duration-200 z-20 bg-white dark:bg-neutral-800">
      Sidebar
    </aside>
  );
};

export default Sidebar;
