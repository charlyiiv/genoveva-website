import type { Metadata } from "next";
import "./globals.css";

import type { Metadata } from "next";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}