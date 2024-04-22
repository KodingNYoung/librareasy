"use server";
import { revalidatePath } from "next/cache";
import { UserPayload, createUser, deleteUser, updateUser } from "./db";
import { Routes } from "@/utilities/enums";
// @ts-ignore
import bcrypt from "bcrypt";
import { fetchUserById } from "../data";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { ZodError, z } from "zod";
import { FormState } from "@/utilities/types";
import { extractZodErrors, generateFormResponse } from "@/utilities/helpers";
import { loginValidation } from "../validations";
import { LoginFields } from "@/components/views/login/LoginForm";

export const login = async (
  state: FormState<LoginFields>,
  formData: FormData
) => {
  const { successResponse, errorResponse, fieldValidationError } =
    generateFormResponse<LoginFields>();
  const { email, password } = Object.fromEntries(formData);
  const parsedCredentials = loginValidation.safeParse({ email, password });
  try {
    if (parsedCredentials.success) {
      await signIn("credentials", formData);
      return successResponse("Successful login");
    } else {
      throw parsedCredentials.error;
    }
  } catch (err) {
    // console.log("log [form action]:", err);

    if (err instanceof ZodError) {
      const errors = extractZodErrors(err);
      return fieldValidationError(errors);
    }

    if (err instanceof AuthError) {
      //   console.log({ errType: err.type });
      let msg;
      switch (err.type) {
        case "CredentialsSignin":
          msg = "Invalid credentials.";
          break;
        default:
          msg = "Something went wrong.";
          break;
      }
      return errorResponse(msg);
    }
    throw err;
  }
};

export const addUser = async (formData: FormData) => {
  const { first_name, last_name, email, password, role } = Object.fromEntries(
    formData
  ) as unknown as UserPayload;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await createUser({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
      is_active: false
    });
  } catch (err) {
    // console.log("log [form actions]:", err);
    throw err;
  }
  revalidatePath(Routes.USERS);
};
export const editUser = async (id: string, formData: FormData) => {
  if (!id) return;
  const { first_name, last_name, role } = Object.fromEntries(
    formData
  ) as unknown as UserPayload;
  try {
    await updateUser(id, {
      first_name,
      last_name,
      role
    });
  } catch (err) {
    // console.log("log [form actions]:", err);
    throw err;
  }
  revalidatePath(Routes.USERS);
};

// check if the user belongs to other organizations
// if it does, update the user organization with an array with this organization's id omitted
// if it doesn't outrightly delete the user.
export const removeUser = async (userId: string) => {
  try {
    const user = await fetchUserById(userId);
    if (user.organizations.length > 1) {
      //   console.log("Updating!!!!");
      // TODO: update the user organization with an array with this organization's id omitted.
    } else {
      await deleteUser(user?._id);
      //   console.log("Deleting!!!!");
    }
  } catch (err) {
    // console.log("log [form actions]:", err);
    throw err;
  }
  revalidatePath(Routes.USERS);
};
