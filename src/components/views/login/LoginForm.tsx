"use client";
import PasswordInput from "@/components/molecules/PasswordInput";
import { Routes } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const LoginForm: FC = () => {
  const router = useRouter();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(Routes.OVERVIEW);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <Input
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
