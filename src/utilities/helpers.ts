import { Timestamp } from "firebase/firestore";
import { FormState, TWClassNames } from "./types";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { ZodError } from "zod";
import { TEntity } from "./objectTypes";
import { ORGANIZATION, USER_ID } from "./dummyData";
import { EntityTypes } from "./enums";

dayjs.extend(calendar);

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter(className => !!className) as string[];
  return validClasses.join(" ");
}

export const convertFirebaseTimestampToString = (timestamp: Timestamp) => {
  const milli = timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
  return dayjs(milli);
};

export const extractZodErrors = (err: ZodError) => {
  return err.issues.reduce((err, curr) => {
    const field = curr.path[0];
    return { ...err, [field]: curr.message };
  }, {});
};
export const generateFormResponse = () => {
  return {
    successResponse: (message: string, data?: any): FormState => ({
      success: true,
      message,
      data
    }),
    errorResponse: (message: string): FormState => ({
      success: false,
      message,
      errorType: "request"
    }),
    validationError: (errors: { [field: string]: string }): FormState => ({
      fields: errors,
      errorType: "validation"
    })
  };
};
export const generateCreateFolderPayload = (payload: {
  name: string;
  parent: string | null;
}): Omit<TEntity, "id"> => {
  return {
    organization: ORGANIZATION,
    type: EntityTypes.FOLDER,
    size: null,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
    created_by: USER_ID,
    category: null,
    url: null,
    name: payload.name,
    parent: payload.parent
  };
};
