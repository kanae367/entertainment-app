import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment App",
  description: "Movie/Series Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header hidden={false}/>
        {children}
        </body>
    </html>
  );
}
