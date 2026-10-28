import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "../styles/globals.css";

// Free stand-in for PP Editorial Old (Belgrade Arbor). The opsz axis gives large text its sharp display cut
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
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
        className={`${newsreader.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
