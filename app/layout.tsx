import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";

import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-nunito',
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Câu Chuyện Hoa Anh Đào Của Chúng Mình - Kỷ Niệm",
  description: "Một hành trình lãng mạn dưới tán hoa anh đào",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
