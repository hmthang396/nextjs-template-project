import { UserAccountResponse } from "@/types/user/reponses";
import { z } from "zod";
import { TokenReponse } from "../../common/responses/token.type";

export const LoginResponse = z.object({
  token: TokenReponse,
  user: UserAccountResponse,
});

export type LoginResponse = z.infer<typeof LoginResponse>;
