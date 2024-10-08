"use client";

import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../../i18nConfig";

function ExampleClientComponent() {
  const locale = useCurrentLocale(i18nConfig);
  return <p>{locale}</p>;
}
export default ExampleClientComponent;
