"use server";
import { createEntity, updateEntity } from "@/firebase/entities";
import { Routes } from "@/utilities/enums";
import {
  extractZodErrors,
  generateCreateFolderPayload,
  generateFormResponse
} from "@/utilities/helpers";
import { FormState } from "@/utilities/types";
import { folderValidation } from "@/utilities/validation";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";

export const createFolder = async (state: FormState, formData: FormData) => {
  const { successResponse, errorResponse, validationError } =
    generateFormResponse();
  const { name, parent } = Object.fromEntries(formData);
  const parsedPayload = folderValidation.safeParse({ name });
  try {
    if (parsedPayload.success) {
      const payload = generateCreateFolderPayload({
        name: name as string,
        parent: (parent || null) as string | null
      });
      const res = await createEntity(payload);
      if (res.success) {
        revalidatePath(Routes.LIBRARY, "page");
        revalidatePath(`${Routes.FOLDER}/[folder]`, "page");
        return successResponse("Created");
      }
      throw res.err;
    } else {
      throw parsedPayload.error;
    }
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = extractZodErrors(err);
      return validationError(errors);
    }
    console.log(err);
    return errorResponse("Something went wrong");
  }
};

export const renameFolder = async (state: FormState, formData: FormData) => {
  const { successResponse, errorResponse, validationError } =
    generateFormResponse();
  const { name, id } = Object.fromEntries(formData);
  const parsedPayload = folderValidation.safeParse({ name });
  try {
    if (parsedPayload.success) {
      const payload = {
        name: name as string
      };
      const res = await updateEntity(payload, id as string);
      if (res.success) {
        revalidatePath(Routes.LIBRARY, "page");
        revalidatePath(`${Routes.FOLDER}/[folder]`, "page");
        return successResponse("Updated");
      }
      throw res.err;
    } else {
      throw parsedPayload.error;
    }
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = extractZodErrors(err);
      return validationError(errors);
    }
    console.log(err);
    return errorResponse("Something went wrong");
  }
};
