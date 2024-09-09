import axios from "axios";
import {
  ApiSuccessResponse,
  GetRequestProps,
  PatchRequestProps,
  PostRequestProps,
  PutRequestProps,
} from "@/types/common";
import { setupInterceptorsTo } from "./interceptors";
import { isSafeParseError } from "../validation";

const axiosInstance = setupInterceptorsTo(
  axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: process.env.NEXT_PUBLIC_URL_API,
  }),
);

export function getRequest<T>(props: GetRequestProps): Promise<ApiSuccessResponse<T>> {
  const { accessToken, url, typeCheck, config } = props;
  return new Promise((resolve, reject) => {
    axiosInstance
      .get<ApiSuccessResponse<T>>(`${process.env.NEXT_PUBLIC_URL_API}${url}`, {
        ...(config || {}),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (typeCheck) {
          const isValid = typeCheck(result?.payload);
          if (isSafeParseError(isValid)) throw new TypeError("The response does not match the expected format.");
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function postRequest<T, U>(props: PostRequestProps<U>): Promise<ApiSuccessResponse<T>> {
  const { accessToken, typeCheck, url, body } = props;
  return new Promise((resolve, reject) => {
    axiosInstance
      .post<ApiSuccessResponse<T>>(`${process.env.NEXT_PUBLIC_URL_API}${url}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (typeCheck) {
          const isValid = typeCheck(result?.payload);
          if (isSafeParseError(isValid)) throw new TypeError("The response does not match the expected format.");
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function putRequest<T, U>(props: PutRequestProps<U>): Promise<ApiSuccessResponse<T>> {
  const { accessToken, typeCheck, url, body } = props;
  return new Promise((resolve, reject) => {
    axiosInstance
      .put<ApiSuccessResponse<T>>(`${process.env.NEXT_PUBLIC_URL_API}${url}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (typeCheck) {
          const isValid = typeCheck(result?.payload);
          if (isSafeParseError(isValid)) throw new TypeError("The response does not match the expected format.");
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function patchRequest<T, U>(props: PatchRequestProps<U>): Promise<ApiSuccessResponse<T>> {
  const { accessToken, typeCheck, url, body } = props;
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch<ApiSuccessResponse<T>>(`${process.env.NEXT_PUBLIC_URL_API}${url}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (typeCheck) {
          const isValid = typeCheck(result?.payload);
          if (isSafeParseError(isValid)) throw new TypeError("The response does not match the expected format.");
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteRequest<T>(props: GetRequestProps): Promise<ApiSuccessResponse<T>> {
  const { accessToken, url, typeCheck, config } = props;
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete<ApiSuccessResponse<T>>(`${process.env.NEXT_PUBLIC_URL_API}${url}`, {
        ...(config || {}),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (typeCheck) {
          const isValid = typeCheck(result?.payload);
          if (isSafeParseError(isValid)) throw new TypeError("The response does not match the expected format.");
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
