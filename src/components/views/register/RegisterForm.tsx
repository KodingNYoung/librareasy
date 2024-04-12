import { register } from "@/app/lib/actions/auth";
import PasswordInput from "@/components/molecules/PasswordInput";
import { FC } from "@/utilities/types";
import { Button, Input } from "@nextui-org/react";
import React from "react";

type Props = {};

const RegisterForm: FC<Props> = () => {
  return (
    <form className="grid grid-cols-2 gap-4" action={register}>
      <Input
        name="first_name"
        label="First Name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        placeholder="John"
        defaultValue=""
      />
      <Input
        name="last_name"
        label="Last Name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        radius="sm"
        placeholder="Doe"
        defaultValue=""
      />
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
        classNames={{ base: "col-span-2" }}
      />
      <Input
        name="organization_name"
        label="Organization Name"
        labelPlacement="outside"
        variant="bordered"
        size="lg"
        isRequired
        radius="sm"
        placeholder="The Johnsons"
        defaultValue=""
        classNames={{ base: "col-span-2" }}
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
        classNames={{ base: "col-span-2" }}
      />
      <Button size="lg" radius="sm" className="mt-4 col-span-2" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
