import Icon from "@/components/atoms/Icon";
import { EntityTypes, PopupModes } from "@/utilities/enums";
import { TEntity } from "@/utilities/objectTypes";
import { FC } from "@/utilities/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import React from "react";

type Props = {
  openModal: (type: EntityTypes, mode: PopupModes, data?: TEntity) => void;
  row: TEntity;
};

const LibraryTableActions: FC<Props> = ({ openModal, row }) => {
  return (
    <div className="flex items-center justify-end gap-0.5">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly variant="light">
            <Icon name="icon-dots-vertical" size={18} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="library-item-actions" variant="light">
          <DropdownItem
            key="download"
            startContent={<Icon name="icon-download-01" size={18} />}
          >
            Download
          </DropdownItem>
          <DropdownItem
            key="rename"
            startContent={<Icon name="icon-edit-03" size={18} />}
            onPress={() => openModal(row.type, PopupModes.EDIT, row)}
          >
            Rename
          </DropdownItem>
          <DropdownItem
            key="share"
            startContent={<Icon name="icon-share-06" size={18} />}
          >
            Share
          </DropdownItem>
          <DropdownItem
            key="delete"
            startContent={<Icon name="icon-trash-01" size={18} />}
            color="danger"
            className="text-danger"
            onPress={() => openModal(row.type, PopupModes.DELETE)}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LibraryTableActions;
