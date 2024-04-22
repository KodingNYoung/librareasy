import { Routes } from "@/utilities/enums";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Teams"
};

const TeamsPage: PageFC = () => {
  return redirect(Routes.USERS);
};

export default TeamsPage;
