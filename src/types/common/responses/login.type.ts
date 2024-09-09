import { z } from "zod";
import { TokenReponse } from "./token.type";

export const LoginReponse = z.object({
  token: TokenReponse,
});

export type LoginReponse = z.infer<typeof LoginReponse>;
