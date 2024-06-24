"use client";
import PasswordInput from "@/components/molecules/PasswordInput";
import SubmitBtn from "@/components/molecules/SubmitBtn";
import { Routes } from "@/utilities/enums";
import { FC, FormState } from "@/utilities/types";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export type LoginFields = "email" | "password";

type LoginFormState = {
  email: string;
  password: string;
} & FormState<LoginFields>;

const initialValues: LoginFormState = {
  email: "",
  password: ""
};

const LoginForm: FC = () => {
  const router = useRouter();
  const login = () => {
    router.push(Routes.OVERVIEW);
  };
  return (
    <form className="flex flex-col gap-4" action={login}>
      <Input
        name="email"
        label="Email"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        isRequired
        radius="sm"
        placeholder="johndoe@example.com"
        defaultValue=""
      />
      <PasswordInput
        name="password"
        label="Password"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        isRequired
        radius="sm"
        placeholder="********"
        defaultValue=""
      />
      <SubmitBtn>Login</SubmitBtn>
    </form>
  );
};

export default LoginForm;
