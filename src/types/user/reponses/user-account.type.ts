import { UserAccountStatus } from "@/enums/user-account-status.enum";
import { Gender } from "@enums/*";
import { z } from "zod";
import { UserLoginDataResponse } from "./user-login-data.type";

export const UserAccountResponse = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  firstName: z.string({ message: "First name is required" }),
  lastName: z.string({ message: "Last name is required" }),
  gender: z.nativeEnum(Gender, { message: "Invalid gender value" }).optional(),
  dateOfBirth: z.string({ message: "Date of birth is required" }).optional(),
  phoneNumber: z.string({ message: "Phone number is required" }).optional(),
  avatar: z.string().url({ message: "Invalid URL format for avatar" }).optional(),
  status: z.nativeEnum(UserAccountStatus, { message: "Invalid account status value" }),
  email: z.string().email({ message: "Invalid email format" }),
  userLoginData: UserLoginDataResponse,
  // company: CompanyResponse.optional(),
});

export type UserAccountResponse = z.infer<typeof UserAccountResponse>;
