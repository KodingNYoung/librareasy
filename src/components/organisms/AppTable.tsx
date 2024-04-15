"use client";
import { FC } from "@/utilities/types";
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableProps,
  TableRow
} from "@nextui-org/react";
import React, {
  ChangeEvent,
  Key,
  ReactNode,
  useCallback,
  useMemo
} from "react";
import Icon from "../atoms/Icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export type TableColumnType = {
  label: string | ReactNode;
  id: string;
  align?: "start" | "center" | "end";
};

type Props = TableProps & {
  columns: TableColumnType[];
  data: any[];
  renderCell: (key: Key, row: any) => ReactNode;
  actions?: ReactNode;
  searchProps?: {
    onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  };
  paginationProps?: {
    totalCount: number;
    rowsPerPageOptions?: number[];
    onPageChange?: (value: number) => void;
    onRowsPerPageChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  };
};

const AppTable: FC<Props> = ({
  columns,
  data,
  renderCell,
  actions,
  searchProps = {},
  paginationProps = { totalCount: 0, rowsPerPageOptions: [] },
  ...props
}) => {
  const { onSearch, placeholder: searchPlaceholder } = searchProps;
  const {
    totalCount,
    rowsPerPageOptions = [5, 10, 15],
    onPageChange,
    onRowsPerPageChange
  } = paginationProps;

  // route hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  // functions
  const handleSearchChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) params.set("q", e.target.value);
      else params.delete("q");
      params.set("page", "1");
      router.replace(`${pathname}?${params}`);
    },
    300
  );
  const handleRowPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      params.set("page", "1");
      router.replace(`${pathname}?${params}`);
    },
    []
  );
  const handlePageChange = useCallback((value: number) => {
    params.set("page", value.toString());
    router.replace(`${pathname}?${params}`);
  }, []);

  //   memos
  const topContent = useMemo(
    () => (
      <div className="flex gap-3 items-center flex-wrap">
        {searchProps && (
          <Input
            className="w-full max-w-96"
            placeholder={searchPlaceholder || "Search..."}
            startContent={<Icon name="icon-search-refraction" />}
            defaultValue={searchParams.get("q")?.toString() || ""}
            onChange={onSearch || handleSearchChange}
          />
        )}
        <div className="flex-1" />
        {actions}
      </div>
    ),
    [searchProps, actions, handleSearchChange, searchParams]
  );
  const bottomContent = useMemo(
    () =>
      paginationProps && (
        <div className="flex items-center justify-between flex-wrap text-foreground-500">
          <span className="text-small">Total {totalCount} items</span>
          <Pagination
            isCompact
            showControls
            color="primary"
            page={Number(searchParams.get("page"))}
            onChange={onPageChange || handlePageChange}
            total={Math.ceil((totalCount || 0) / 5)}
            isDisabled={!totalCount}
          />
        </div>
      ),
    [
      paginationProps,
      searchParams,
      handlePageChange,
      onPageChange,
      rowsPerPageOptions,
      handleRowPerPageChange,
      onRowsPerPageChange
    ]
  );

  return (
    <Table topContent={topContent} bottomContent={bottomContent} {...props}>
      <TableHeader columns={columns}>
        {column => {
          return (
            <TableColumn key={column.id} align={column?.align || "start"}>
              {column.label}
            </TableColumn>
          );
        }}
      </TableHeader>
      <TableBody items={data} emptyContent={"No rows to display."}>
        {item => {
          return (
            <TableRow key={item?._id}>
              {columnKey => (
                <TableCell>{renderCell(columnKey, item)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};

export default AppTable;
