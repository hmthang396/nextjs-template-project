import { z } from "zod";

export const LoginRequest = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid format" })
    .min(1, "Email must be between 1 and 255 characters long")
    .max(255, "Email must be between 1 and 255 characters long"),
  password: z
    .string({ message: "Password is required" })
    .min(6, "Password must be between 6 and 100 characters long")
    .max(100, "Password must be between 6 and 100 characters long")
    .regex(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .regex(/^(?=.*[a-z])/, "Password must contain at least one lowercase letter")
    .regex(/^(?=.*\d)/, "Password must contain at least one digit")
    .regex(/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/, "Password must contain at least one special character"),
});

export type LoginRequest = z.infer<typeof LoginRequest>;
