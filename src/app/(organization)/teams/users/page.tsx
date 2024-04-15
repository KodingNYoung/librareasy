import { fetchUsers } from "@/app/lib/data";
import Users from "@/components/views/users";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Users"
};

const UsersPage: PageFC = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page || 1);
  const limit = 5;

  const users = await fetchUsers(q as string, page, limit);

  return <Users users={users} />;
};

export default UsersPage;
