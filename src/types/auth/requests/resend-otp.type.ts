import { z } from "zod";

export const ResendOtpRequest = z.object({
  email: z
    .string()
    .email()
    .min(1, "Email must be between 1 and 255 characters long")
    .max(255, "Email must be between 1 and 255 characters long"),
});

export type ResendOtpRequest = z.infer<typeof ResendOtpRequest>;
