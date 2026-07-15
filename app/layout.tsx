import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "GENOVEVA | Fairline Squadron 58 Share For Sale",
  description:
    "Own a 1/8 share in GENOVEVA, a beautifully maintained Fairline Squadron 58 based in Port d'Alcúdia, Majorca.",
  verification: {
    google: "vig1muIpPLFWcd7FOqolKlnm8yDYa5ZORLOei2SWdHA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-PTSK13E58M" />
    </html>
  );
}