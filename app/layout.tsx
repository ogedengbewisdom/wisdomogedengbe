import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wisdom Ogedengbe",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
