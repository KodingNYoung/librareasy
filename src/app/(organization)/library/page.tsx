import Library from "@/components/views/library";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Library",
};

const LibraryPage: PageFC = () => {
  return <Library />;
};

export default LibraryPage;
