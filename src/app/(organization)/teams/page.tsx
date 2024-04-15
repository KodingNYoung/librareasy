import { fetchUsers } from "@/app/lib/data";
import { IUser } from "@/app/lib/types";
import { Routes } from "@/utilities/enums";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Teams"
};

const TeamsPage: PageFC = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page || "1");
  const limit = Number(searchParams?.limit || "");

  const users = await fetchUsers(q as string, page, limit);

  return redirect(Routes.USERS);
};

export default TeamsPage;
