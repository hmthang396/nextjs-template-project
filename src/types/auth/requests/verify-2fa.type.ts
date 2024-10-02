import { z } from "zod";

export const Verify2FARequest = z.object({
  otp: z
    .string({
      message: "OTP code is required",
    })
    .regex(/^\d*$/, { message: "OTP digits must be a number!" })
    .length(6, "OTP code must be 6 characters long"),
});

export type Verify2FARequest = z.infer<typeof Verify2FARequest>;
