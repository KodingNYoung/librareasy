import Login from "@/components/views/login";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: PageFC = () => {
  return <Login />;
};

export default LoginPage;
