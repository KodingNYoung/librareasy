import { Button } from "@nextui-org/react";
import React from "react";
import Icon from "../atoms/Icon";
import { signOut } from "@/auth";
import { FC } from "@/utilities/types";

const LogoutBtn: FC = () => {
  return (
    <form
      action={async () => {
        "use server";
        const res = await signOut();
        console.log(res);
      }}
      className="w-full flex flex-col"
    >
      <Button
        variant="light"
        className="mx-6 m-2 flex justify-start items-center gap-2"
        color="danger"
        startContent={<Icon name="icon-log-out-01" size={24} />}
        type="submit"
      >
        <span>Logout</span>
      </Button>
    </form>
  );
};

export default LogoutBtn;
