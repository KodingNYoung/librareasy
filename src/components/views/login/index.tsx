import { FC } from "@/utilities/types";
import React from "react";
import LoginForm from "./LoginForm";
import { Routes } from "@/utilities/enums";
import Link from "next/link";

const Login: FC = () => {
  return (
    <div className="w-full grid gap-5">
      <header className="text-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <span className="text-base font-normal">
          Welcome back! Sign in to continue
        </span>
      </header>
      <LoginForm />
      <span className="text-center mt-5">
        I am a new user! <Link href={Routes.REGISTER}>Create account</Link>
      </span>
    </div>
  );
};

export default Login;
