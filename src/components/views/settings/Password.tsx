import PasswordInput from "@/components/molecules/PasswordInput";
import { FC } from "@/utilities/types";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

const Password: FC = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="flex-col items-start">
        <h2 className="text-xl font-semibold">Reset Password</h2>
        <span className="text-xs font-normal text-monochrome-1300">
          Strength your security by using unguessable password
        </span>
      </CardHeader>
      <Divider />
      <CardBody className="px-4 py-6">
        <form className="grid gap-6">
          <PasswordInput
            name="old_password"
            label="Old Password"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="********"
            defaultValue=""
          />
          <PasswordInput
            name="new_password"
            label="New Password"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="********"
            defaultValue=""
          />
          <PasswordInput
            name="confirm_new_password"
            label="Confirm New Password"
            labelPlacement="outside"
            variant="bordered"
            size="lg"
            radius="sm"
            placeholder="********"
            defaultValue=""
          />
          <Button size="lg" radius="sm" className="mt-4 w-fit" type="submit">
            Update
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Password;
