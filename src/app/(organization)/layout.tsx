import OrganizationLayout from "@/components/views/layouts/Organization";
import { LayoutFC } from "@/utilities/types";
import React from "react";
import Providers from "./providers";
import { auth } from "@/auth";

const Layout: LayoutFC = async ({ children }) => {
  const session = await auth();
  console.log(session?.user);
  return (
    <Providers>
      <OrganizationLayout>{children}</OrganizationLayout>
    </Providers>
  );
};

export default Layout;
