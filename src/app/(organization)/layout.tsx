import OrganizationLayout from "@/components/views/layouts/Organization";
import { LayoutFC } from "@/utilities/types";
import React, { Suspense } from "react";
import Providers from "./providers";

const Layout: LayoutFC = async ({ children }) => {
  return (
    <Providers>
      <Suspense>
        <OrganizationLayout>{children}</OrganizationLayout>
      </Suspense>
    </Providers>
  );
};

export default Layout;
