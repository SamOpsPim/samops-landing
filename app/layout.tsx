import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SamOps - Coming Soon",
  description: "SamOps transforms complex system data into actionable intelligence. Coming soon - join the waitlist!",
  keywords: ["SamOps", "FinOps", "Cloud Operations", "Monitoring", "Cost Optimization"],
  authors: [{ name: "SamOps Team" }],
  openGraph: {
    title: "SamOps - Coming Soon",
    description: "Turn System Complexity into Actionable Intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
