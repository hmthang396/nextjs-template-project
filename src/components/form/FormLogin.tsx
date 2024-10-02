"use client";

import { authRepository } from "@/repositories/auth/auth.repository";
import { ChangeEvent, useState } from "react";

const FormLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    try {
      await authRepository.login({ email: username, password });
    } catch (error) {}
  };

  return (
    <>
      <input
        type='text'
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type='text'
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </>
  );
};

export default FormLogin;
