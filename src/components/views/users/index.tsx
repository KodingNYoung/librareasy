"use client";

import { IUser } from "@/app/lib/types";
import Icon from "@/components/atoms/Icon";
import { FC } from "@/utilities/types";
import { Button, Chip, User } from "@nextui-org/react";
import React, { Key, useCallback, useState } from "react";
import UserModal from "./UserModal";
import { useModal } from "@/hooks/modalHooks";
import { PopupModes, Roles } from "@/utilities/enums";
import AppTable, { TableColumnType } from "@/components/organisms/AppTable";

type Props = {
  users: { data: IUser[]; total: number };
};

const columns: TableColumnType[] = [
  {
    label: "Name",
    id: "name"
  },
  {
    label: "Role",
    id: "role"
  },
  {
    label: "Active",
    id: "active"
  },
  {
    label: "Date Added",
    id: "date_added"
  },
  {
    label: "Action",
    id: "action",
    align: "end"
  }
];

const Users: FC<Props> = ({ users }) => {
  const [modalPayload, setModalPayload] = useState<{
    data?: IUser;
    mode: PopupModes;
  } | null>(null);

  //   modal hooks
  const userModal = useModal(<UserModal {...modalPayload} />);

  //   functions
  const render = useCallback((key: Key, row: IUser) => {
    switch (key) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "sm",
              src: row?.img,
              showFallback: true,
              fallback: <Icon name="icon-user-01" size={20} />
            }}
            name={`${row.first_name} ${row.last_name}`}
            description={row.email}
          />
        );
      case "role":
        return <span className="capitalize">{row.role}</span>;
      case "active":
        return (
          <Chip
            radius="sm"
            variant="flat"
            color={row.is_active ? "success" : "danger"}
          >
            {row.is_active ? "Active" : "Inactive"}
          </Chip>
        );
      case "action":
        return (
          // Cannot edit or delete an admin
          row.role !== Roles.OWNER && (
            <div className="flex items-center justify-end gap-0.5">
              <Button
                isIconOnly
                variant="light"
                onPress={() => openModal(PopupModes.EDIT, row)}
              >
                <Icon name="icon-edit-03" size={18} />
              </Button>
              <Button isIconOnly variant="light" color="danger">
                <Icon name="icon-trash-01" size={18} />
              </Button>
            </div>
          )
        );
    }
  }, []);
  const openModal = useCallback(
    (mode: PopupModes, data?: IUser) => {
      setModalPayload({ mode, data });
      userModal.open();
    },
    [userModal]
  );

  return (
    <div className="py-4 sm:py-10">
      <AppTable
        columns={columns}
        data={users.data}
        renderCell={render}
        aria-label="User table"
        classNames={{ base: "max-w-[1200px] w-full mx-auto" }}
        actions={
          <Button
            color="primary"
            startContent={<Icon name="icon-plus" size={18} />}
            onPress={() => openModal(PopupModes.ADD)}
          >
            Add User
          </Button>
        }
        searchProps={{
          placeholder: "Search by name or email..."
        }}
        paginationProps={{
          totalCount: users.total
        }}
      />
      {userModal.content}
    </div>
  );
};

export default Users;
