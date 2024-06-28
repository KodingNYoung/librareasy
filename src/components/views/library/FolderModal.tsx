import AppModal from "@/components/molecules/AppModal";
import { FC } from "@/utilities/types";
import React from "react";
import FolderModalForm from "./FolderModalForm";
import { TEntity } from "@/utilities/objectTypes";
import { PopupModes } from "@/utilities/enums";

type Props = {
  data?: TEntity;
  mode?: PopupModes;
  folder?: string;
};

const FolderModal: FC<Props> = ({ data, mode, folder }) => {
  const isEdit = mode === PopupModes.EDIT;
  return (
    <AppModal title={isEdit ? "Rename Folder" : "New Folder"} showHeader>
      <FolderModalForm isEdit={isEdit} data={data} parent={folder} />
    </AppModal>
  );
};

export default FolderModal;
