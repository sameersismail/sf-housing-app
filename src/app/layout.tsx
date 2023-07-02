import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type ProfilesContextType = {
  searcherProfiles: HousingSearchProfile[] | null;
  setSearcherProfiles: Dispatch<SetStateAction<HousingSearchProfile[]>>;
};

const inter = Inter({ subsets: ["latin"] });
export const ProfilesContext = createContext<ProfilesContextType | null>(null);

const siteTitle = "DirectorySF";
const siteDescription =
  "An invite-only directory of people you probably know that are looking for housing in San Francisco.";
const siteImage = "/sfd.png";
const siteURL = "https://www.directorysf.com/";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [
    { name: "Thomas Schulz", url: "https://twitter.com/thomasschulzz" },
    { name: "Neall Seth", url: "https://neall.org" },
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: siteTitle,
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
  const [searcherProfiles, setSearcherProfiles] = useState<
    HousingSearchProfile[]
  >([]);

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <ProfilesContext.Provider
        value={{ searcherProfiles, setSearcherProfiles }}
      >
        <body className={inter.className}>{children}</body>
      </ProfilesContext.Provider>
    </html>
  );
}
