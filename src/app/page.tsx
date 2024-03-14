import { ROUTES } from "@/utilities/constants";
import { PageFC } from "@/utilities/types";
import { redirect } from "next/navigation";

const RootPage: PageFC = () => {
  redirect(ROUTES.LOGIN);
};

export default RootPage;
