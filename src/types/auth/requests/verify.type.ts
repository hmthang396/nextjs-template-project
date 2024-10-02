import { z } from "zod";

export const VerifyRequest = z.object({
  email: z
    .string()
    .email()
    .min(1, "Email must be between 1 and 255 characters long")
    .max(255, "Email must be between 1 and 255 characters long"),
  otp: z
    .string({
      message: "OTP code is required",
    })
    .length(6, "OTP code must be 6 characters long"),
});

export type VerifyRequest = z.infer<typeof VerifyRequest>;
