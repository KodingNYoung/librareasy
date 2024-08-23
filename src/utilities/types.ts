import { HTMLProps, PropsWithChildren, ReactElement } from "react";
import { Roles } from "./enums";

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

export type FormState =
  | {}
  | {
      success: true;
      message: string;
      data?: any;
    }
  | {
      fields: { [field: string]: string };
      errorType?: "validation";
    }
  | {
      success: false;
      message: string;
      errorType: "request";
    };

export interface IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  img?: string;
  role?: Roles;
  is_active?: boolean;
  organizations?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IOrganization {
  name: string;
  description?: string;
  logo?: string;
  no_of_members?: number;
  owner?: string;
}

declare module "react" {
  interface HTMLAttributes<T> {
    isDisabled?: boolean;
    originalProps?: any;
  }
}
