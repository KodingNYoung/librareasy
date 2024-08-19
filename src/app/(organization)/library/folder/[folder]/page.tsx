import React from "react";
import { PageFC } from "@/utilities/types";
import Library from "@/components/views/library";
import { getAllEntities } from "@/firebase/entities";
import { ORGANIZATION } from "@/utilities/dummyData";

const Folder: PageFC = async ({ params }) => {
  const entities = await getAllEntities(ORGANIZATION, params?.folder as string);

  return <Library entities={entities} folder={params?.folder as string} />;
};

export default Folder;
