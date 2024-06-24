import Organizations from "@/components/views/organizations";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Organizations"
};

const OrganizationsPage: PageFC = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page || 1);
  const limit = 5;

  return <Organizations organizations={{ data: [], total: 0 }} />;
};

export default OrganizationsPage;
