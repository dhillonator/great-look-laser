import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Look Laser",
  description: "Professional Laser Hair Removal Services in Surrey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="beforeInteractive"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Topbar />
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}