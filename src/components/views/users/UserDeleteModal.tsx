import { FC } from "@/utilities/types";
import React from "react";
import { TUser } from ".";
import ConfirmationModal from "@/components/molecules/ConfirmationModal";
import { removeUser } from "@/app/lib/actions/forms";

type Props = {
  user: TUser;
};

const UserDeleteModal: FC<Props> = ({ user }) => {
  return (
    <ConfirmationModal
      title="Remove User?"
      content="Removing this user deleted them from this organization. You can add them back later."
      okBtnContent="Yes, Remove"
      onOkClick={async () => await removeUser(user._id)}
    />
  );
};

export default UserDeleteModal;
