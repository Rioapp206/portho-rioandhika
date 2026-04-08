import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rio Andhika P. | Portfolio",
  description: "Senior Fullstack Developer & Creative Director. Futuristic and modern multipage portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
