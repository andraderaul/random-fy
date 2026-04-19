import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { getAccessToken, logoutAction } from "@/features/auth";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Randomfy",
  description:
    "Discover artists you'll love based on what you already listen to.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Randomfy",
    description:
      "Discover artists you'll love based on what you already listen to.",
    url: "https://randomfy.app",
    siteName: "Randomfy",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getAccessToken();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} min-h-dvh antialiased font-sans`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header isAuthenticated={!!token} onLogout={logoutAction} />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
