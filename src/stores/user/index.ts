import { localStorageEffect } from "@/functions/recoil";
import { UserReponse } from "@/types/user";
import { SetterOrUpdater, atom, useRecoilState } from "recoil";
import { getRecoil, resetRecoil, setRecoil } from "recoil-nexus";

const userState = atom<UserReponse | undefined>({
  key: "user",
  default: undefined,
  effects: [localStorageEffect],
});
export type UserState = typeof userState;
export const useUserState = () => useRecoilState(userState);
export const getUserState = () => getRecoil(userState);
export const setUserState: SetterOrUpdater<UserReponse | undefined> = (valOrUpdater) =>
  setRecoil(userState, valOrUpdater);
export const clearUserState = () => resetRecoil(userState);
