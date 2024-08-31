import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asta Homepage",
  description: "Created by Pol with <3",
  keywords: ["dress", "party"]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <h4 className="text-center">root layout</h4>
        {children}
      </body>
    </html>
  );
}
