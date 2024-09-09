import { z } from "zod";

export const UserReponse = z.object({
  id: z.number(),
  uuid: z.string(),
  email: z.string().email(),
  avatar: z.string().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  isTwoFAEnable: z.boolean(),
  isSuperUser: z.boolean(),
  status: z.string(),
  createdAt: z.string(),
});

export type UserReponse = z.infer<typeof UserReponse>;
