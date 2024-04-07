import Register from "@/components/views/register";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register"
};

const RegisterPage: PageFC = () => {
  return <Register />;
};

export default RegisterPage;
