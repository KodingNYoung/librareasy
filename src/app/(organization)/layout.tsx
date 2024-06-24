import OrganizationLayout from "@/components/views/layouts/Organization";
import { LayoutFC } from "@/utilities/types";
import React from "react";
import Providers from "./providers";
import { auth } from "@/auth";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from "@tanstack/react-query";
import { fetchUserByEmail } from "../lib/data";

const Layout: LayoutFC = async ({ children }) => {
  const queryClient = new QueryClient();
  const session = await auth();

  if (session && session.user && session.user.email)
    await queryClient.prefetchQuery({
      queryKey: ["users", session?.user?.email],
      queryFn: async () => await fetchUserByEmail(session?.user?.email || "")
    });

  return (
    <Providers>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OrganizationLayout>{children}</OrganizationLayout>
      </HydrationBoundary>
    </Providers>
  );
};

export default Layout;
