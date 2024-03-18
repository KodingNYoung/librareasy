import { HTMLProps, PropsWithChildren, ReactElement } from "react";

export type ColorVariants =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "transparent"
  | "current"
  | "warning"
  | "success"
  | "error"
  | "neutral"
  | "gray";

export type TWClassNames = HTMLProps<HTMLElement>["className"];
export type FC<PropsType = {}> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null;
  displayName?: string;
};
export type LayoutFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined }
> = {
  (props: PropsWithChildren<{ params?: ParamsType }>, context?: unknown):
    | ReactElement
    | null
    | Promise<ReactElement | null>;
  displayName?: string;
};
export type PageFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined },
  SearchParamsType = {
    [searchParamsKey: string]: string | string[] | undefined;
  }
> = {
  (
    props: {
      params?: ParamsType;
      searchParams?: SearchParamsType;
    },
    context?: unknown
  ): ReactElement | null | Promise<ReactElement | null>;
  displayName?: string;
};
export type MetadataProps<
  P = { [key: string]: string | undefined },
  SP = { [key: string]: string | string[] | undefined }
> = {
  params: P;
  searchParams: SP;
};
declare module "react" {
  interface HTMLAttributes<T> {
    isDisabled?: boolean;
    originalProps?: any;
  }
}
