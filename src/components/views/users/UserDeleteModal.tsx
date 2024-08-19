import { FC } from "@/utilities/types";
import React from "react";
import { TUser } from ".";
import ConfirmationModal from "@/components/molecules/ConfirmationModal";

type Props = {
  user: TUser;
};

const UserDeleteModal: FC<Props> = ({ user }) => {
  return (
    <ConfirmationModal
      title="Remove User?"
      content="Removing this user deleted them from this organization. You can add them back later."
      okBtnContent="Yes, Remove"
      onOkClick={console.log}
    />
  );
};

export default UserDeleteModal;
