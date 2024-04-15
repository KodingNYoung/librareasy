import { Roles } from "@/utilities/enums";
import { Schema } from "mongoose";

export interface IUser {
  _id?: typeof Schema.Types.ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  img?: string;
  role?: Roles;
  is_active?: boolean;
  organizations?: string[];
}
export interface IOrganization {
  name: string;
  description?: string;
  logo?: string;
  no_of_members?: number;
  owner?: typeof Schema.Types.ObjectId;
}
