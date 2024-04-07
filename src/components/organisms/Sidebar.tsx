"use client";
import { FC } from "@/utilities/types";
import React, { useContext } from "react";
import { Button, Divider, Listbox, ListboxItem, User } from "@nextui-org/react";
import Icon from "../atoms/Icon";
import { cls } from "@/utilities/helpers";
import { SidebarColllapseContext } from "@/contexts/layout";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/utilities/enums";
import { IconNames } from "@/utilities/iconNames";

const routeItems: {
  key: string;
  label: string;
  href: Routes;
  icon: IconNames;
}[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: Routes.OVERVIEW,
    icon: "icon-home-02"
  },
  {
    key: "library",
    label: "Library",
    href: Routes.LIBRARY,
    icon: "icon-book-open-01"
  },
  {
    key: "teams",
    label: "Teams",
    href: Routes.TEAMS,
    icon: "icon-users-01"
  },
  {
    key: "settings",
    label: "Settings",
    href: Routes.SETTINGS,
    icon: "icon-settings-01"
  }
];

const Sidebar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleCollapse, isCollapsed } = useContext(SidebarColllapseContext);
  return (
    <aside
      className={cls(
        "max-w-full w-full h-full sm:w-[260px] flex-col  fixed  flex transition-all duration-200 z-[21] bg-white dark:bg-neutral-800 pb-6 sm:!left-0",
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
            classNames: { base: "w-8 h-8 min-w-8 min-h-8" }
          }}
          classNames={{
            base: "w-full",
            wrapper: "w-full",
            description: "w-full truncate "
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
        <Listbox
          variant="light"
          classNames={{ base: "p-0" }}
          items={routeItems}
          onAction={toggleCollapse}
          aria-label="sidebar navigation"
          selectionMode="single"
          selectedKeys={
            routeItems.find(item => pathname.includes(item.href))?.key
          }
        >
          {item => (
            <ListboxItem
              key={item.key}
              classNames={{
                base: cls("px-6 py-2"),
                title: "text-lg"
              }}
              href={item.href}
              startContent={<Icon name={item.icon} size={24} />}
              hideSelectedIcon
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </nav>
      <Button
        variant="light"
        className="mx-6 m-2 flex justify-start items-center gap-2"
        color="danger"
        startContent={<Icon name="icon-log-out-01" size={24} />}
        onClick={() => router.push(Routes.LOGIN)}
      >
        <span>Logout</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
