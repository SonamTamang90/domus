import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../styles/globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domus - Modern Dream Homes",
  description: "Discover futuristic and modern dream homes with Domus real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
