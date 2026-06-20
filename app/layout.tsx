import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { siteConfig } from "@/content/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} — Engineer, Researcher, Creator`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["IIT Bombay", "Mechanical Engineering", "FEM", "Meesho", "Content Creator", "SARC"],
  authors: [{ name: siteConfig.name }],
  openGraph: { type: "website", locale: "en_IN", title: siteConfig.name, description: siteConfig.description },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="grain">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
