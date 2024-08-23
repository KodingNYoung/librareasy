import { FC } from "@/utilities/types";
import React from "react";
import AppBreadcrumbs from "../../atoms/Breadcrumbs";
import { Routes } from "@/utilities/enums";
import { getEntity } from "@/firebase/entities";

type Props = {
  folder: string;
};

const LibraryBreadcrumbs: FC<Props> = ({ folder }) => {
  if (!folder) return null;
  console.log(folder);
  getEntity(folder);
  return (
    <AppBreadcrumbs
      size="lg"
      items={[
        { label: "Root", link: Routes.LIBRARY },
        { label: "Folder 1", link: `${Routes.LIBRARY}/folder/3893ehw8ui23` }
      ]}
    />
  );
};

export default LibraryBreadcrumbs;
