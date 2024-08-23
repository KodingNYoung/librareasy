import { FC } from "@/utilities/types";
import {
  BreadcrumbItem,
  Breadcrumbs,
  BreadcrumbsProps
} from "@nextui-org/react";
import React from "react";

type Props = BreadcrumbsProps & {
  items: { label: string; link: string }[];
};

const AppBreadcrumbs: FC<Props> = ({ items, ...props }) => {
  return (
    <Breadcrumbs
      maxItems={4}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={2}
      {...props}
    >
      {items.map(({ label, link }) => (
        <BreadcrumbItem href={link}>{label}</BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
