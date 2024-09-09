import { postRequest } from "@/functions/api";
import { LoginRequest, TokenReponse } from "@/types/common";

const login = async (params: LoginRequest) => {
  try {
    const response = await postRequest<TokenReponse, LoginRequest>({
      url: `/api/v1/auth/login`,
      body: params,
      typeCheck: TokenReponse.safeParse,
    });
    console.log(response);
  } catch (error) {
    throw error;
  }
};

export const AuthRepository = { login };
