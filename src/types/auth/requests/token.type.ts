import { z } from "zod";

export const GetAccessToken = z.object({
  refreshToken: z.string().min(1).max(2024),
});

export type GetAccessToken = z.infer<typeof GetAccessToken>;
