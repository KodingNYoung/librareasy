import { FC } from "@/utilities/types";
import { Button, ButtonProps } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = ButtonProps & {};

const SubmitBtn: FC<Props> = ({ children, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      size="lg"
      radius="sm"
      className="mt-4"
      type="submit"
      isLoading={pending}
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
