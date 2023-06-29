import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteTitle = "DirectorySF";
const siteDescription =
  "An invite-only directory of people you probably know that are looking for housing in San Francisco.";
const siteImage = "/sfd.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    images: siteImage,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
