import type { Metadata } from "next";
import styles from "./page.module.css";

// Static Metadata
export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function Page() {
  return (
    <>
      <p className={styles.test}>Login Page</p>
    </>
  );
}
