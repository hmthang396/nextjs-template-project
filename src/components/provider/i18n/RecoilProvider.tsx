"use client";

import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

export default function RecoidProvider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
}
