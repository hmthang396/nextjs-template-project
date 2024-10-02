import { z } from "zod";

export const ProcessResetPasswordRequest = z
  .object({
    token: z
      .string({ message: "Token is required" })
      .min(1, "Token must be between 1 and 2024 characters long")
      .max(2024, "Token must be between 1 and 2024 characters long"),
    password: z
      .string({ message: "Password is required" })
      .min(6, "Password must be between 6 and 100 characters long")
      .max(100, "Password must be between 6 and 100 characters long")
      .regex(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
      .regex(/^(?=.*[a-z])/, "Password must contain at least one lowercase letter")
      .regex(/^(?=.*\d)/, "Password must contain at least one digit")
      .regex(/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/, "Password must contain at least one special character"),
    password_confirm: z.string({ message: "Confirmation password is required" }),
  })
  .refine((request) => request.password === request.password_confirm, {
    message: "Confirm password does not match with password",
    path: ["password_confirm"],
  })
  .innerType();

export type ProcessResetPasswordRequest = z.infer<typeof ProcessResetPasswordRequest>;
