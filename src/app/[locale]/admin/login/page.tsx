import type { Metadata } from "next";
import styles from "./page.module.css";

// Dynamic Metadata
export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function Page() {
  return (
    <>
      <p className={styles.text}>Login page for admin</p>
    </>
  );
}
