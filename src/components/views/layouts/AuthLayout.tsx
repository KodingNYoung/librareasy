import SwitchThemeBtn from "@/components/molecules/SwitchThemeBtn";
import { FC } from "@/utilities/types";
import React from "react";

const AuthLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center min-h-screen text-monochrome-1800 dark:text-monochrome-100 bg-[#f4f7fe] dark:bg-neutral-900 transition-colors p-2">
      <SwitchThemeBtn variant="solid" />
      {/* <Logo /> */}
      <main className="w-[469px] max-w-full border border-monochrome-800 dark:border-monochrome-1600 shadow-auth-light dark:shadow-auth-dark bg-auth-gradient-light dark:bg-auth-gradient-dark py-6 px-4 sm:py-12 sm:px-8 rounded-xl">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
