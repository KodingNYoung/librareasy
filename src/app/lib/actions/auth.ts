"use server";

import {
  createOrganization,
  updateOrganization
} from "@/api/services/organizations";
import { createUser } from "@/api/services/users";
import { Routes } from "@/utilities/enums";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../../../../auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { AuthError } from "next-auth";
import { FormState } from "@/utilities/types";

// action to register a user to the platform
// creates an organization with a blank `owner` field, then creates a user with organization.id as the only item in the `organizations` array field, then updates the organization's `owner` field with user.id.
export const register = async (formData: FormData) => {
  const { first_name, last_name, email, organization_name, password } =
    Object.fromEntries(formData) as { [key: string]: string };
  try {
    const organization = await createOrganization({
      name: organization_name
    });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await createUser({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      organizations: [organization._id]
    });
    const newOrganization = await updateOrganization(organization._id, {
      owner: user._id
    });
    if (!newOrganization.acknowledged) {
      throw new Error("Couldn't update organization owner");
    }
  } catch (err: any) {
    console.log("log [action]:", err);
    throw err;
  }
  redirect(Routes.LOGIN);
};

// action to log users into the platform
// checks if the user's email is found in the db and compares the password inputted with the one in the db
export const login = async (
  prevState: string | undefined,
  formData: FormData
) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await signIn("credentials", { email, password });
    console.log("log [login action]: this is after the signIn function call");
  } catch (err) {
    console.log(
      "log [login action]:",
      err instanceof Error,
      isRedirectError(err)
    );
    if (err instanceof AuthError) {
      const { type, cause } = err as AuthError;
      switch (type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        // case "CallbackRouteError":
        //   return cause?.err?.toString();
        default:
          return "Something went wrong.";
      }
    }
    // if (isRedirectError(err)) {
    throw err;
    // }
  }
};
