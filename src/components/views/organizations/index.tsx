"use client";
import { IOrganization } from "@/app/lib/types";
import Icon from "@/components/atoms/Icon";
import AppTable, { TableColumnType } from "@/components/organisms/AppTable";
import { useModal } from "@/hooks/modalHooks";
import { PopupModes } from "@/utilities/enums";
import { FC } from "@/utilities/types";
import { Button, User } from "@nextui-org/react";
import React, { Key, useCallback, useState } from "react";

type Props = {
  organizations?: { data: IOrganization[]; total: number };
};

const columns: TableColumnType[] = [
  { label: "Name", id: "name" },
  { label: "Owner", id: "owner" },
  { label: "Description", id: "description" },
  { label: "No of users", id: "no-of-users" },
  { label: "Date created", id: "date-created" },
  { label: "Actions", id: "actions" }
];

const Organizations: FC<Props> = () => {
  const [modalPayload, setModalPayload] = useState<{
    data?: IOrganization;
    mode: PopupModes;
  } | null>(null);

  //   modal hooks
  const organizationModal = useModal(<>hello</>);

  // functions
  const render = useCallback((key: Key, row: IOrganization) => {
    switch (key) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "sm",
              src: row?.logo,
              showFallback: true,
              fallback: <Icon name="icon-user-01" size={20} />
            }}
            name={row.name}
          />
        );
      case "owner":
        return row.owner?.toString();
      case "description":
        return row.description;
      case "no-of-users":
        return row.no_of_members;
      case "actions":
        return (
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
        );
    }
  }, []);
  const openModal = useCallback(
    (mode: PopupModes, data?: IOrganization) => {
      setModalPayload({ mode, data });
      organizationModal.open();
    },
    [organizationModal]
  );

  return (
    <div className="py-4 sm:py-10">
      <AppTable
        columns={columns}
        data={[]}
        renderCell={render}
        aria-label="Organization table"
        classNames={{ base: "max-w-[1200px] w-full mx-auto" }}
        actions={
          <Button
            color="primary"
            startContent={<Icon name="icon-plus" />}
            onPress={() => openModal(PopupModes.ADD)}
          >
            Add Organization
          </Button>
        }
        searchProps={{ placeholder: "Search by organization name..." }}
        paginationProps={{
          totalCount: [].length
        }}
      />
      {organizationModal.content}
    </div>
  );
};

export default Organizations;
