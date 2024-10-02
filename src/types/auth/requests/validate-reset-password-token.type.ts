import { z } from "zod";

export const ValidateResetPasswordRequest = z.object({
  token: z
    .string({ message: "Token is required" })
    .min(1, "Token must be between 1 and 2024 characters long")
    .max(2024, "Token must be between 1 and 2024 characters long"),
});

export type ValidateResetPasswordRequest = z.infer<typeof ValidateResetPasswordRequest>;
