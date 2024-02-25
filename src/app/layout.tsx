import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Main from "./main";

const inter = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Searchify",
  description: "A search app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
