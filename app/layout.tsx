import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "SamOps - Cloud FinOps Intelligence Platform",
  description:
    "SamOps centralizes cloud cost visibility, detects anomalies, generates optimization recommendations, and automates remediation — from billing data to pull request.",
  keywords: [
    "SamOps",
    "FinOps",
    "Cloud Cost Optimization",
    "Anomaly Detection",
    "Cloud Operations",
    "Cost Management",
    "Rightsizing",
    "AI Code Analysis",
  ],
  authors: [{ name: "SamOps Team" }],
  openGraph: {
    title: "SamOps - Cloud FinOps Intelligence Platform",
    description:
      "Real-time cloud cost visibility. AI-powered anomaly detection. Automated optimization — all the way to code-level fixes.",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
