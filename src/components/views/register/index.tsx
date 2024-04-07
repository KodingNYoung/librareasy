import { FC } from "@/utilities/types";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Routes } from "@/utilities/enums";
import Link from "next/link";

const Register: FC = () => {
  return (
    <div className="w-full grid gap-5">
      <header className="text-center">
        <h1 className="text-2xl font-bold">Register</h1>
        <span className="text-base font-normal">
          Create an account to start organising your files
        </span>
      </header>
      <RegisterForm />
      <span className="text-center mt-5">
        I have an account! <Link href={Routes.LOGIN}>Login</Link>
      </span>
    </div>
  );
};

export default Register;
