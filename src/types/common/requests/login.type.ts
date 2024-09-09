import { z } from "zod";

export const LoginRequest = z.object({
  //   email: z
  //     .string()
  //     .email()
  //     .min(1, "Email must be between 1 and 255 characters long")
  //     .max(255, "Email must be between 1 and 255 characters long"),
  username: z
    .string()
    .min(1, "Username must be between 1 and 255 characters long")
    .max(255, "Username must be between 1 and 255 characters long"),
  password: z
    .string()
    .min(6, "Password must be between 6 and 100 characters long")
    .max(100, "Password must be between 6 and 100 characters long")
    .regex(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .regex(/^(?=.*[a-z])/, "Password must contain at least one lowercase letter")
    .regex(/^(?=.*\d)/, "Password must contain at least one digit")
    .regex(/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/, "Password must contain at least one special character"),
});

export type LoginRequest = z.infer<typeof LoginRequest>;
