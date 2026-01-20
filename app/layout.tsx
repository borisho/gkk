import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@appComponents/Header";
import Footer from "@appComponents/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GKK",
  description: "Webová stránka Go klubu Košice",
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${geist} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
