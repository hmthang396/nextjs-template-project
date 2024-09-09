import { z } from "zod";

export const TokenReponse = z.object({
  tokenType: z.string(),
  accessToken: z.string(),
  accessTokenExpireAt: z.number(),
  refreshToken: z.string(),
  refreshTokenExpireAt: z.number(),
});

export type TokenReponse = z.infer<typeof TokenReponse>;
