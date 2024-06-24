import Users from "@/components/views/users";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Users"
};

const UsersPage: PageFC = async ({ searchParams }) => {
  return <Users users={{ total: 0, data: [] }} />;
};

export default UsersPage;
