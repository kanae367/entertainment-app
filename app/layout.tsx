import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import "./globals.scss";

const outfit = Outfit({ subsets: ["latin"] });

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
      <body className={outfit.className}>
        <Header hidden={false}/>
        <Search></Search>
        {children}
        </body>
    </html>
  );
}
