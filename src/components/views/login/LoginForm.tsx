"use client";
import { login } from "@/app/lib/actions/forms";
import PasswordInput from "@/components/molecules/PasswordInput";
import SubmitBtn from "@/components/molecules/SubmitBtn";
import { useFormToast } from "@/hooks/toastHooks";
import { FC, FormState } from "@/utilities/types";
import { Input } from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

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
  const [response, action] = useFormState<LoginFormState>(
    login as any,
    initialValues
  );

  const formRef = useFormToast(response, "Authenticating");

  //   const state = {
  //     success: { message: "Test success message" },
  //     error: { message: "Test error message" },
  //     field: { password: "", email: "" },
  //     type: "validation" || "request"
  //   };

  //   console.log(response);
  //   const test = toast.error("Hello");
  //   console.log(test);
  return (
    <form className="flex flex-col gap-4" action={action} ref={formRef}>
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
        isInvalid={Boolean(
          response.errorType === "validation" && response?.fields?.email
        )}
        errorMessage={response.fields?.email}
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
        isInvalid={Boolean(
          response.errorType === "validation" && response?.fields?.password
        )}
        errorMessage={response.fields?.password}
      />
      <SubmitBtn>Login</SubmitBtn>
      {/* {response?.message || } */}
    </form>
  );
};

export default LoginForm;
