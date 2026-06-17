import type { Metadata } from "next";
import "./globals.css";
import AppTransition from "@/components/AppTransition";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "A Netflix-inspired streaming homepage built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-clip bg-[#050505] text-white">
        <AppTransition>{children}</AppTransition>
      </body>
    </html>
  );
}
