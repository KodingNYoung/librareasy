import OrganizationLayout from "@/components/views/layouts/Organization";
import { LayoutFC } from "@/utilities/types";
import React from "react";

const Layout: LayoutFC = ({ children }) => {
  return <OrganizationLayout>{children}</OrganizationLayout>;
};

export default Layout;
