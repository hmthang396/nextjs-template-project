import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { openGraphImage } from "@constants/*";
import { dir } from "i18next";
import i18nConfig from "../../../i18nConfig";
import RecoidProvider from "@/components/provider/i18n/RecoilProvider";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  title: "Home | Foundation-NextJS",
  description: "Home | Foundation-NextJS page description",
  icons: [
    {
      url: "/favicon.ico",
      type: "ico",
    },
    {
      url: "/assets/images/favicon.png",
      type: "icon",
    },
  ],
  openGraph: {
    ...openGraphImage,
    title: "Home | Foundation-NextJS",
  },
};
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <RecoidProvider>{children}</RecoidProvider>
      </body>
    </html>
  );
}
