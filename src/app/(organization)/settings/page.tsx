import { fetchUsers } from "@/api/services/users";
import Settings from "@/components/views/settings";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Settings"
};

const SettingsPage: PageFC = async () => {
  const users = await fetchUsers();
  console.log(users);
  return <Settings />;
};

export default SettingsPage;
