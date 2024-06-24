import OrganizationLayout from "@/components/views/layouts/Organization";
import { LayoutFC } from "@/utilities/types";
import React from "react";
import Providers from "./providers";

const Layout: LayoutFC = async ({ children }) => {
  return (
    <Providers>
      <OrganizationLayout>{children}</OrganizationLayout>
    </Providers>
  );
};

export default Layout;
