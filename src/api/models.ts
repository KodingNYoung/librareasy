import { Schema, model, models } from "mongoose";
import { MongoTables } from "./utils/enums";
import { IOrganization, IUser } from "./utils/types";

// User schema
const userSchema = new Schema<IUser>(
  {
    first_name: { type: String, required: true, min: 3 },
    last_name: { type: String, required: true, min: 3 },
    email: { type: String, required: true, unique: true, min: 3 },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    organizations: [
      {
        type: Schema.Types.ObjectId,
        ref: MongoTables.ORGANIZATIONS,
        required: true
      }
    ]
  },
  { timestamps: true }
);

// Organization schema
const organizationSchema = new Schema<IOrganization>(
  {
    name: { type: String, required: true, min: 3 },
    description: { type: String, min: 3 },
    logo: { type: String },
    owner: {
      type: Schema.Types.ObjectId,
      ref: MongoTables.USERS
    }
  },
  { timestamps: true }
);

export const User =
  models?.[MongoTables.USERS] || model(MongoTables.USERS, userSchema);
export const Organization =
  models?.[MongoTables.ORGANIZATIONS] ||
  model(MongoTables.ORGANIZATIONS, organizationSchema);
