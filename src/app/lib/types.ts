import { Roles } from "@/utilities/enums";

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
