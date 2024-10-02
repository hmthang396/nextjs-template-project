import { httpClient } from "@/functions/api";
import { IRequestBuilder, RequestBuilder } from "@/functions/api/request-builder";
import {
  CreateResetPasswordRequest,
  GetAccessToken,
  LoginRequest,
  LoginResponse,
  ProcessResetPasswordRequest,
  RegisterRequest,
  ResendOtpRequest,
  ValidateResetPasswordRequest,
  Verify2FARequest,
  VerifyRequest,
} from "@/types/auth";
import { TokenReponse } from "@/types/common";
import { UserAccountResponse } from "@/types/user";

interface IAuthRepository {
  register(request: RegisterRequest): Promise<UserAccountResponse>;
  login(request: LoginRequest): Promise<LoginResponse>;
  resendOtp(request: ResendOtpRequest): Promise<void>;
  verify(request: VerifyRequest): Promise<void>;
  verify2FA(request: Verify2FARequest): Promise<TokenReponse>;
  createResetPassword(request: CreateResetPasswordRequest): Promise<void>;
  validateResetPasswordToken(request: ValidateResetPasswordRequest): Promise<boolean>;
  processResetPassword(request: ProcessResetPasswordRequest): Promise<boolean>;
  logout(): Promise<void>;
}

class AuthRepository implements IAuthRepository {
  private static instance: AuthRepository;
  private requestBuilder: IRequestBuilder;

  private constructor(requestBuilder: IRequestBuilder) {
    this.requestBuilder = requestBuilder;
  }

  public static getInstance(requestBuilder: IRequestBuilder): AuthRepository {
    if (!AuthRepository.instance) {
      AuthRepository.instance = new AuthRepository(requestBuilder);
    }
    return AuthRepository.instance;
  }

  public async register(request: RegisterRequest): Promise<UserAccountResponse> {
    const { payload } = await httpClient.post<UserAccountResponse, RegisterRequest>({
      url: this.requestBuilder.buildUrl("register"),
      body: request,
      typeCheck: UserAccountResponse.safeParse,
    });
    return payload;
  }

  public async login(request: LoginRequest): Promise<LoginResponse> {
    const { payload } = await httpClient.post<LoginResponse, LoginRequest>({
      url: this.requestBuilder.buildUrl("login"),
      body: request,
      typeCheck: LoginResponse.safeParse,
    });
    return payload;
  }

  public async resendOtp(request: ResendOtpRequest): Promise<void> {
    await httpClient.post<void, ResendOtpRequest>({
      url: this.requestBuilder.buildUrl("register/resend-otp"),
      body: request,
    });
  }

  public async verify(request: VerifyRequest): Promise<void> {
    await httpClient.post<void, VerifyRequest>({
      url: this.requestBuilder.buildUrl("register/verify"),
      body: request,
    });
  }

  public async verify2FA(request: Verify2FARequest): Promise<TokenReponse> {
    const { payload } = await httpClient.post<TokenReponse, Verify2FARequest>({
      url: this.requestBuilder.buildUrl("2fa/verify"),
      body: request,
      config: {
        withCredentials: true,
      },
    });
    return payload;
  }

  public async createResetPassword(request: CreateResetPasswordRequest): Promise<void> {
    const { payload } = await httpClient.post<void, CreateResetPasswordRequest>({
      url: this.requestBuilder.buildUrl("reset-password/create"),
      body: request,
    });
    return payload;
  }

  public async validateResetPasswordToken(request: ValidateResetPasswordRequest): Promise<boolean> {
    const { payload } = await httpClient.post<{ result: boolean }, ValidateResetPasswordRequest>({
      url: this.requestBuilder.buildUrl("reset-password/validate-token"),
      body: request,
    });
    return payload.result;
  }

  public async processResetPassword(request: ProcessResetPasswordRequest): Promise<boolean> {
    const { payload } = await httpClient.post<{ result: boolean }, ProcessResetPasswordRequest>({
      url: this.requestBuilder.buildUrl("reset-password/process"),
      body: request,
    });
    return payload.result;
  }

  public async logout(): Promise<void> {
    await httpClient.post({
      url: this.requestBuilder.buildUrl("logout"),
      body: {},
    });
  }

  public async refreshToken(request: GetAccessToken): Promise<boolean> {
    const { payload } = await httpClient.post<{ result: boolean }, GetAccessToken>({
      url: this.requestBuilder.buildUrl("token/refresh"),
      body: request,
    });
    return payload.result;
  }
}

const requestBuilder = new RequestBuilder();
requestBuilder.setResourcePath("auth");
export const authRepository = AuthRepository.getInstance(requestBuilder);
