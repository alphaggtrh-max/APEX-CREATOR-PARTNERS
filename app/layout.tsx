import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX Creator Partners — Creator Growth & Management",
  description:
    "Strategic growth, thoughtful management and operational support for independent subscription creators.",
  metadataBase: new URL("https://apex-creator-partners.com"),
  openGraph: {
    title: "APEX Creator Partners",
    description: "Build with intention. Grow with direction.",
    url: "https://apex-creator-partners.com",
    siteName: "APEX Creator Partners",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}