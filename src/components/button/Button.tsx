"use client";
import Text, { TextProps } from "../Text";
import { ReactNode } from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TextProps["tx"];
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"];
  children?: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { tx, text, children } = props;
  return (
    <button className={styles.button}>
      <Text tx={tx} text={text}>
        {children}
      </Text>
    </button>
  );
}
