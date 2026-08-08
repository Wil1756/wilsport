import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "william Opio",
  description: "Software Engineer building modern web applications and cloud solutions",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${geistSans.className} bg-zinc-950 text-zinc-50 antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
