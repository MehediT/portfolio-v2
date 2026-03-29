import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehedi Touré — Fullstack & Android Developer",
  description:
    "Software engineer specializing in scalable web applications and native Android development. Based in Paris, France.",
  openGraph: {
    title: "Mehedi Touré — Fullstack & Android Developer",
    description:
      "Software engineer specializing in scalable web applications and native Android development. Based in Paris, France.",
    url: "https://mehedi-toure.com",
    siteName: "Mehedi Touré",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Touré — Fullstack & Android Developer",
    description:
      "Software engineer specializing in scalable web applications and native Android development. Based in Paris, France.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
