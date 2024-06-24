"use client";
import AppTable, { TableColumnType } from "@/components/organisms/AppTable";
import { FC } from "@/utilities/types";
import React, { Key, useCallback } from "react";

export type TEntity = {
  type: "file";
  name: string;
  category: string;
  uploaded_by: string;
  updated_at: string;
  size: number;
  id: string;
  parent: null | string;
};

const columns: TableColumnType[] = [
  { label: "Name", id: "name" },
  { label: "Category", id: "category" },
  { label: "Created by", id: "uploaded-by" },
  { label: "Last Modified", id: "updated-at" },
  { label: "Size", id: "size" },
  { label: "Action", id: "action", align: "end" }
];

const Library: FC = () => {
  const render = useCallback((key: Key, row: TEntity) => {
    switch (key) {
      case "name":
        return row.type + row.name;
    }
  }, []);
  return (
    <div className="p-2.5 sm:p-5 py-2.5 sm:py-4 relative h-full">
      <AppTable
        columns={columns}
        data={new Array(100)
          .fill(null)
          .map(_ => ({ key: (Math.random() * 1000).toString() }))}
        renderCell={render}
        aria-label="Library table"
        removeWrapper
        isHeaderSticky
        searchProps={{ variant: "bordered", placeholder: "Search by name..." }}
        classNames={{
          root: "h-full",
          base: "h-full overflow-auto"
        }}
      />
    </div>
  );
};

export default Library;
