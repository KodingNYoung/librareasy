import { Routes } from "@/utilities/enums";
import { PageFC } from "@/utilities/types";
import { redirect } from "next/navigation";

const RootPage: PageFC = () => {
  redirect(Routes.LOGIN);
};

export default RootPage;
