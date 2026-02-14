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
    siteName: "SamOps",
  },
  twitter: {
    card: "summary_large_image",
    title: "SamOps - Cloud FinOps Intelligence Platform",
    description:
      "Real-time cloud cost visibility. AI-powered anomaly detection. Automated optimization — all the way to code-level fixes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here when available
    // google: 'your-google-verification-token',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#02040a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
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
