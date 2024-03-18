import Overview from "@/components/views/overview";
import { PageFC } from "@/utilities/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard Overview",
};

const OverviewPage: PageFC = () => {
  return <Overview />;
};

export default OverviewPage;
