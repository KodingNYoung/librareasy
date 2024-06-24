"use client";
import { ThemeModeProvider } from "@/contexts/theme";
import { FC } from "@/utilities/types";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers: FC = ({ children }) => {
  const router = useRouter();
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ThemeModeProvider>
        <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      </ThemeModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
