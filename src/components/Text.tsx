import { TxKeyPath } from "@/types/i18n";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type TextProps = {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  children?: ReactNode;
};

export default function Text(props: TextProps) {
  const { t } = useTranslation();
  const { text, tx, children } = props;
  const i18nText = tx && t(tx);
  const content = i18nText || text || children;
  return <>{content}</>;
}
