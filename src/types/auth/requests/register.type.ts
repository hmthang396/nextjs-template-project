import { Gender } from "@enums/*";
import { z } from "zod";

const RegisterUserAccount = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(1, "First name must be between 1 and 100 characters long")
    .max(100, "First name must be between 1 and 100 characters long"),
  lastName: z
    .string({ message: "Last name is required" })
    .min(1, "Last name must be between 1 and 100 characters long")
    .max(100, "Last name must be between 1 and 100 characters long"),
  gender: z
    .nativeEnum(Gender, {
      message: `Gender must be in values ${Gender.Female} or ${Gender.Male}`,
    })
    .optional(),
  dateOfBirth: z.date({ message: "Date of birth is required" }).optional(),
  phoneNumber: z
    .string()
    .min(9, "Phone number must be between 9 and 15 characters long")
    .max(15, "Phone number must be between 9 and 15 characters long")
    .regex(/^\+?1?\d{9,15}$/, `Phone number must be entered in the format: "+999999999". Up to 15 digits allowed.`)
    .optional(),
});

const RegisterUserLogin = z
  .object({
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
    password_confirm: z.string({ message: "Confirmation password is required" }),
  })
  .refine((request) => request.password === request.password_confirm, {
    message: "Confirm password does not match with password",
    path: ["password_confirm"],
  })
  .innerType();

export const RegisterFormObject = RegisterUserAccount.merge(RegisterUserLogin);

export const RegisterRequest = z.object({
  userAccount: RegisterUserAccount,
  userLogin: RegisterUserLogin,
});

export type RegisterRequest = z.infer<typeof RegisterRequest>;
export type RegisterFormObject = z.infer<typeof RegisterFormObject>;
