import Library from "@/components/views/library";
import { getAllEntities } from "@/firebase/entities";
import { ORGANIZATION } from "@/utilities/dummyData";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Library"
};

const LibraryPage: PageFC = async () => {
  const entities = await getAllEntities(ORGANIZATION);
  return <Library entities={entities} />;
};

export default LibraryPage;
