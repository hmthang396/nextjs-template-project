import { localStorageEffect } from "@/functions/recoil";
import { TokenReponse } from "@/types/common";
import { SetterOrUpdater, atom, useRecoilState } from "recoil";
import { getRecoil, resetRecoil, setRecoil } from "recoil-nexus";

const tokenState = atom<TokenReponse | undefined>({
  key: "token",
  default: undefined,
  effects: [localStorageEffect],
});

export type TokenState = typeof tokenState;
export const useTokenState = () => useRecoilState(tokenState);
export const getTokenState = () => getRecoil(tokenState);
export const setTokenState: SetterOrUpdater<TokenReponse | undefined> = (valOrUpdater) =>
  setRecoil(tokenState, valOrUpdater);
export const clearTokenState = () => resetRecoil(tokenState);
