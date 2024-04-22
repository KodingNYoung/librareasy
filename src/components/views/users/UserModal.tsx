import { useModalContext } from "@/hooks/modalHooks";
import { FC } from "@/utilities/types";
import { ModalProps } from "@nextui-org/react";
import React from "react";
import UserModalForm from "./UserModalForm";
import { PopupModes } from "@/utilities/enums";
import { TUser } from ".";
import AppModal from "@/components/molecules/AppModal";

type Props = Omit<ModalProps, "children"> & {
  mode?: PopupModes;
  data?: TUser;
};

const UserModal: FC<Props> = ({ mode, data }) => {
  const { close } = useModalContext();
  const isEdit = mode === PopupModes.EDIT;
  return (
    <AppModal title={isEdit ? "Edit user" : "Add user"} showHeader>
      <UserModalForm close={close} isEdit={isEdit} data={data} />
    </AppModal>
  );
};

export default UserModal;
