import type { Metadata } from "next";
import { M_PLUS_1p, Urbanist, Racing_Sans_One } from "next/font/google";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const mPlus = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-m-plus',
  display: 'swap',
})

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-racing-sans-one',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tailus astro theme",
  description: "Template built with tailwindcss using Tailus blocks v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${urbanist.variable} ${mPlus.variable} ${racingSansOne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950">
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
