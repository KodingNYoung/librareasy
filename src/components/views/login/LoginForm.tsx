"use client";
import { login } from "@/app/lib/actions/auth";
import PasswordInput from "@/components/molecules/PasswordInput";
import { FC, FormState } from "@/utilities/types";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";

type LoginFormState = {
  email: string;
  password: string;
} & FormState;

const LoginForm: FC = () => {
  const [error, action] = useFormState(login, undefined);
  return (
    <form className="flex flex-col gap-4" action={action}>
      <Input
        name="email"
        type="email"
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
      <Button size="lg" radius="sm" className="mt-4" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
