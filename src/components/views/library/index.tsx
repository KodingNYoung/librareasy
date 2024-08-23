"use client";
import EntityIcon from "@/components/atoms/EntityIcon";
import Icon from "@/components/atoms/Icon";
import AppTable, { TableColumnType } from "@/components/organisms/AppTable";
import { convertFirebaseTimestampToString } from "@/utilities/helpers";
import { TEntity } from "@/utilities/objectTypes";
import { FC } from "@/utilities/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import React, { Key, useCallback, useState } from "react";
import FolderModal from "./FolderModal";
import { useModal } from "@/hooks/modalHooks";
import { EntityTypes, PopupModes, Routes } from "@/utilities/enums";
import { useRouter } from "next/navigation";
import LibraryTableActions from "./LibraryTableActions";
import LibraryBreadcrumbs from "@/components/views/library/LibraryBreadcrumbs";

type Props = {
  entities: TEntity[];
  folder?: string;
};

const columns: TableColumnType[] = [
  { label: "Name", id: "name" },
  { label: "Created by", id: "created-by" },
  { label: "Last Modified", id: "updated-at" },
  { label: "Category", id: "category" },
  { label: "Size", id: "size" },
  { label: "Action", id: "action", align: "end" }
];

const Library: FC<Props> = ({ entities, folder }) => {
  const router = useRouter();
  const [modalPayload, setModalPayload] = useState<{
    data?: TEntity;
    mode: PopupModes;
  } | null>(null);

  // modal hooks
  const folderModal = useModal(
    <FolderModal {...modalPayload} folder={folder} />
  );

  //  functions
  const render = useCallback((key: Key, row: TEntity) => {
    switch (key) {
      case "name":
        return (
          <div className="flex gap-3 items-center">
            <EntityIcon fileType={row.type === "folder" ? "folder" : "image"} />
            <span>{row.name}</span>
          </div>
        );
      case "category":
        return row.category ?? <Icon name="icon-minus" size={18} />;
      case "created-by":
        return row.created_by;
      case "updated-at":
        const date = convertFirebaseTimestampToString(row.updated_at);
        return <span>{date.format("DD MMM, YYYY")}</span>;
      case "size":
        return row.type === "folder" ? (
          <Icon name="icon-minus" size={18} />
        ) : (
          "2MB"
        );
      case "action":
        return <LibraryTableActions openModal={openModal} row={row} />;
    }
  }, []);

  const openModal = useCallback(
    (type: EntityTypes, mode: PopupModes, data?: TEntity) => {
      setModalPayload({ mode, data });
      if (type === "folder") {
        if (mode === PopupModes.DELETE) {
          console.log("Delete folder");
        } else {
          folderModal.open();
        }
      } else if (type === "file") {
        console.log("File");
      }
    },
    [folderModal]
  );
  const handleRowClick = (item: TEntity) => {
    if (item.type === EntityTypes.FOLDER) {
      router.push(`${Routes.FOLDER}/${item.id}`);
    } else if (item.type === EntityTypes.FILE) {
      // go to file url on a new tab
    }
  };

  return (
    <div className="p-2.5 sm:p-5 py-2.5 sm:py-4 relative h-full flex flex-col gap-4">
      <LibraryBreadcrumbs folder={folder || ""} />
      <AppTable
        columns={columns}
        data={entities}
        renderCell={render}
        aria-label="Library table"
        removeWrapper
        isHeaderSticky
        searchProps={{ variant: "bordered", placeholder: "Search by name..." }}
        classNames={{
          root: "h-full",
          base: "h-full overflow-auto",
          tr: "cursor-pointer hover:bg-default-100 bg-opacity-70 select-none"
        }}
        actions={
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="light"
                color="primary"
                endContent={<Icon name="icon-chevron-down" size={18} />}
              >
                New
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="library-new-actions" variant="light">
              <DropdownItem
                key="folder"
                startContent={<Icon name="icon-folder-plus" size={18} />}
                onPress={() => openModal(EntityTypes.FOLDER, PopupModes.ADD)}
              >
                New Folder
              </DropdownItem>
              <DropdownItem
                key="file"
                startContent={<Icon name="icon-upload-02" size={18} />}
              >
                File upload
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }
        rowProps={{ onDoubleClick: handleRowClick }}
      />
      {folderModal.content}
    </div>
  );
};

export default Library;
