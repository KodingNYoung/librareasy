import { z } from "zod";

export const folderValidation = z.object({
  name: z
    .string({ required_error: "Folder name is required." })
    .min(1, "Folder name is required")
});
