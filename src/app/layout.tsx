import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhaskarwar.co.in"),
  title: "Bhaskarwar Estates",
  description: "A new system is being built.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Bhaskarwar Estates",
    description: "A new system is being built.",
    url: "https://bhaskarwar.co.in",
    siteName: "Bhaskarwar Estates",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaskarwar Estates",
    description: "A new system is being built.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#080808] text-[#e8e4dc] antialiased">
        {children}
      </body>
    </html>
  );
}
