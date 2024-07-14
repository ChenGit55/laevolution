import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LA Evolution",
  description: "Soccer training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="global-container">{children}</main>
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
