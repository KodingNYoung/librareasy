import { Schema } from "mongoose";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  img?: string;
  organizations?: string[];
}
export interface IOrganization {
  name: string;
  description?: string;
  logo?: string;
  owner?: typeof Schema.Types.ObjectId;
}
