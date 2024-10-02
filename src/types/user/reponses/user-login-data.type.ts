import { EmailStatus } from "@/enums/email-status.enum";
import { UserPosition } from "@/enums/user-position.enum";
import { z } from "zod";

export const UserLoginDataResponse = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  email: z.string().email({ message: "Invalid email format" }),
  emailStatus: z.nativeEnum(EmailStatus, {
    message: "Invalid emailStatus value",
  }),
  isTwoFactorEnabled: z.boolean({ message: "isTwoFactorEnabled is required" }),
  userPosition: z.nativeEnum(UserPosition, {
    message: "Invalid userPosition value",
  }),
});

export type UserLoginDataResponse = z.infer<typeof UserLoginDataResponse>;
