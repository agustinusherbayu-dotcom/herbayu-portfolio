import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.metadata.title,
  description: profile.metadata.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: profile.metadata.title,
    description: profile.metadata.description,
    type: "website",
    siteName: profile.brand,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.metadata.title,
    description: profile.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
