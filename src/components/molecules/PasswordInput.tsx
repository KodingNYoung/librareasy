"use client";

import { FC } from "@/utilities/types";
import { Input, InputProps } from "@nextui-org/react";
import React, { useState } from "react";
import Icon from "../atoms/Icon";

type Props = Omit<InputProps, "type">;

const PasswordInput: FC<Props> = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(curr => !curr);
  };

  return (
    <Input
      {...props}
      endContent={
        <button type="button" onClick={toggleShow}>
          <Icon name={show ? "icon-eye-off" : "icon-eye"} size={20} />
        </button>
      }
      type={show ? "text" : "password"}
    />
  );
};

export default PasswordInput;
