import { z } from "zod";

export const TokenReponse = z.object({
  tokenType: z.string({ message: "Token type is required" }),
  accessToken: z.string({ message: "Access token is required" }),
  accessTokenExpires: z.string({ message: "Access token expires is required" }),
});

export type TokenReponse = z.infer<typeof TokenReponse>;
