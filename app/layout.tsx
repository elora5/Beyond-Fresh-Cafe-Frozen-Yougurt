import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-family-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-family-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Fresh Cafe Frozen Yougurt | Fresh, Healthy & Delicious",
  description:
    "Discover our signature wraps, fresh smoothies, protein bowls, and frozen yogurt. Quality standards you can verify in every bowl, wrap, and frozen yogurt. Loved by thousands of locals.",
  keywords: [
    "Beyond Fresh Cafe",
    "frozen yogurt",
    "healthy food",
    "smoothies",
    "wraps",
    "protein bowls",
    "cafe menu",
    "fresh food",
  ],
  openGraph: {
    title: "Beyond Fresh Cafe Frozen Yougurt",
    description:
      "Fresh, Healthy & Delicious Meals, Orchestrated. Quality standards you can verify in every bowl, wrap, and frozen yogurt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
