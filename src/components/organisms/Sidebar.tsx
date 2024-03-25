"use client";
import { FC } from "@/utilities/types";
import React, { useContext } from "react";
import { Button, Divider, Listbox, ListboxItem, User } from "@nextui-org/react";
import Icon from "../atoms/Icon";
import Link from "next/link";
import { ROUTES } from "@/utilities/constants";
import { cls } from "@/utilities/helpers";
import { SidebarColllapseContext } from "@/contexts/layout";

const Sidebar: FC = () => {
  const { toggleCollapse, isCollapsed } = useContext(SidebarColllapseContext);
  return (
    <aside
      className={cls(
        "max-w-full w-full h-full sm:w-[260px] flex-col  fixed  flex transition-all duration-200 z-20 bg-white dark:bg-neutral-800 pb-6 sm:!left-0",
        isCollapsed ? "-left-full " : "left-0"
      )}
    >
      <header className="p-6  w-full flex justify-between items-start">
        <User
          name="Owner"
          description="abiodunadebambo44@gmail.com"
          avatarProps={{
            isBordered: true,
            radius: "sm",
            showFallback: true,
            src: "",
            fallback: <Icon name="icon-user-01" size={20} />,
            classNames: { base: "w-8 h-8 min-w-8 min-h-8" },
          }}
          classNames={{
            base: "w-full",
            wrapper: "w-full",
            description: "w-full truncate ",
          }}
        />
        <Button
          isIconOnly
          variant="light"
          onClick={toggleCollapse}
          className="sm:hidden"
        >
          <Icon name="icon-x-close" />
        </Button>
      </header>
      <Divider />
      <nav className="py-8 flex-1">
        <Listbox variant="light" classNames={{ base: "p-0" }}>
          <ListboxItem
            key="dashboard"
            classNames={{
              base: "p-0",
              title: "text-lg",
            }}
            onClick={toggleCollapse}
          >
            <Link
              href={ROUTES.OVERVIEW}
              className="px-6 p-2 flex items-center gap-2"
            >
              <Icon name="icon-home-02" size={24} />
              <span>Dashboard</span>
            </Link>
          </ListboxItem>
          <ListboxItem
            key="library"
            classNames={{ base: "p-0", title: "text-lg" }}
            onClick={toggleCollapse}
          >
            <Link
              className="px-6 p-2 flex items-center gap-2"
              href={ROUTES.LIBRARY}
            >
              <Icon name="icon-book-open-01" size={24} />
              <span>Library</span>
            </Link>
          </ListboxItem>
          <ListboxItem
            key="teams"
            classNames={{ base: "p-0", title: "text-lg" }}
            onClick={toggleCollapse}
          >
            <Link
              className=" px-6 p-2 flex items-center gap-2"
              href={ROUTES.TEAMS}
            >
              <Icon name="icon-users-01" size={24} />
              <span>Teams</span>
            </Link>
          </ListboxItem>
          <ListboxItem
            key="settings"
            classNames={{ base: "p-0", title: "text-lg" }}
            onClick={toggleCollapse}
          >
            <Link
              className=" px-6 p-2 flex items-center gap-2"
              href={ROUTES.SETTINGS}
            >
              <Icon name="icon-settings-01" size={24} />
              <span>Settings</span>
            </Link>
          </ListboxItem>
        </Listbox>
      </nav>
      <Button
        variant="light"
        className="mx-6 m-2 flex justify-start items-center gap-2"
        color="danger"
        startContent={<Icon name="icon-log-out-01" size={24} />}
      >
        <span>Logout</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
