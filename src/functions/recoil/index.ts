import { AtomEffect } from "recoil";
import { Storage } from "../storage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const localStorageEffect: AtomEffect<any | undefined> = ({ onSet, node }) => {
  const key = "@" + node.key;
  onSet((newValue, _, isReset) => {
    if (newValue) Storage.save(key, newValue);
    else if (isReset || !newValue) Storage.remove(key);
  });
};
