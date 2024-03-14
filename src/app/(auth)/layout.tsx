import AuthLayout from "@/components/views/layouts/AuthLayout";
import { LayoutFC } from "@/utilities/types";
import React from "react";

const Layout: LayoutFC = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
