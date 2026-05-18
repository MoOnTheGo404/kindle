import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kindle",
    template: "%s | Kindle"
  },
  description:
    "Kindle helps kidney transplant candidates draft a simple, consent-first story they can review and share.",
  applicationName: "Kindle",
  keywords: [
    "kidney transplant",
    "patient storytelling",
    "ethical health communication"
  ],
  authors: [{ name: "Kindle" }],
  creator: "Kindle",
  openGraph: {
    title: "Kindle",
    description:
      "A simple storytelling workspace for adults on the kidney transplant waitlist.",
    url: siteUrl,
    siteName: "Kindle",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Kindle ethical storytelling support"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindle",
    description:
      "A simple storytelling workspace for kidney transplant candidates.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
