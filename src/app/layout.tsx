import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLine from "@/components/NavbarLine";
import Icon from "../4192598.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "catchymew",
  description: "Simplify your beauty needs",
  icons: "https://cdn-icons-png.flaticon.com/512/4192/4192598.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-pink-200"><NavbarLine/>{children}</body>
    </html>
  );
}
