import { Organization } from "../models";
import { connectToDB } from "./mongo";

type OrganizationPayload = {
  name?: string;
  description?: string;
  logo?: Buffer;
  owner?: string;
};

// create a organization
export const createOrganization = async (payload: OrganizationPayload) => {
  try {
    connectToDB();
    const newOrg = new Organization(payload);
    return await newOrg.save();
  } catch (err) {
    console.log("log [service]:", err);
    throw err;
  }
};

// update an organization details
export const updateOrganization = async (
  _id: string,
  payload: OrganizationPayload
) => {
  try {
    const organization = await Organization.findById(_id);
    if (organization) {
      //    update the organization and save
      return await Organization.updateOne({ _id }, { $set: payload });
    } else {
      throw new Error("Organozation id doesn't exist in the database.");
    }
  } catch (err) {
    console.log("log [service]:", err);
    throw err;
  }
};
