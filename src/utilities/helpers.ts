import { ZodError } from "zod";
import { FormState, TWClassNames } from "./types";

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter(className => !!className) as string[];
  return validClasses.join(" ");
}
export const generateFormResponse = <Fields extends string>() => {
  return {
    successResponse: (message: string): FormState => ({
      success: { message }
    }),
    errorResponse: (message: string): FormState => ({
      error: { message },
      errorType: "request"
    }),
    fieldValidationError: (errors: {
      [field in Fields]?: string;
    }): FormState<Fields> => ({
      fields: errors,
      errorType: "validation"
    })
  };
};
export const extractZodErrors = (err: ZodError) => {
  return err.issues.reduce((err, curr) => {
    const field = curr.path[0];
    return { ...err, [field]: curr.message };
  }, {} as { email: string; password: string });
};
