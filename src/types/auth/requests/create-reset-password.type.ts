import { z } from "zod";

export const CreateResetPasswordRequest = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid format" })
    .min(1, "Email must be between 1 and 255 characters long")
    .max(255, "Email must be between 1 and 255 characters long"),
});

export type CreateResetPasswordRequest = z.infer<typeof CreateResetPasswordRequest>;
