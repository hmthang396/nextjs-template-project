import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { TokenReponse } from "@/types/common";
import { GetAccessToken } from "@/types/common/requests/token.type";
import { httpClient } from "../api";

export const handleUnauthorizedError = async (
  axiosInstance: AxiosInstance,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: InternalAxiosRequestConfig<any> | undefined,
) => {
  try {
    const response = await httpClient.post<TokenReponse, GetAccessToken>({
      url: `/api/v1/auth/token/refresh`,
      body: { refreshToken: localStorage.getItem("refreshToken") || "" },
      typeCheck: TokenReponse.safeParse,
    });
    if (response.payload) {
      // !Todo: Upload token store

      // !Todo: Re-send
      if (!config) return;
      config.headers.Authorization = `Bearer ${response.payload.accessToken}`;
      return axiosInstance(config);
    }
  } catch (error) {
    console.log(`REFRESH_TOKEN_EXPIRED - handleUnauthorizedError`);
    return Promise.reject(error);
  }
};
