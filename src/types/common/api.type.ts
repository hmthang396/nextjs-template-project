import { AxiosRequestConfig } from "axios";
import { ParseParams, SafeParseReturnType } from "zod";

export type ApiSuccessResponse<T> = {
  payload: T;
  timestamp: number;
};

export type ApiFailureResponse = {
  errorType: string | string[];
  message: string;
  statusCode: number | string;
  timestamp: number;
};

export type GetRequestProps = {
  url: string;
  typeCheck?: (data: unknown, params?: Partial<ParseParams>) => SafeParseReturnType<unknown, unknown>;
  accessToken?: string;
  config?: AxiosRequestConfig;
};

export type PostRequestProps<T> = {
  url: string;
  typeCheck?: (data: unknown, params?: Partial<ParseParams>) => SafeParseReturnType<unknown, unknown>;
  accessToken?: string;
  body: T;
};

export type PutRequestProps<T> = PostRequestProps<T>;

export type PatchRequestProps<T> = PostRequestProps<T>;
