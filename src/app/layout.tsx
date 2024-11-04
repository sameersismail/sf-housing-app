import "./globals.css";
import { Inter } from "next/font/google";
import { Noto_Serif, Noto_Serif_Display } from "next/font/google";
import { Metadata } from "next";
import LoadingSpinner from "../components/loading-spinner/loading-spinner";
import { Suspense } from "react";
import Script from "next/script";
import { GTM_ID } from "@/lib/googleAnalytics";
import AuthContextProvider from "@/contexts/auth-context";
import { PHProvider } from "@/lib/posthog/PostHogProvider";

// import dynamic from "next/dynamic";

// const PostHogPageView = dynamic(() => import("@/lib/posthog/PostHogPageView"), {
//   ssr: false,
// });

const inter = Inter({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });
const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";

const siteTitle = "DirectorySF";
const siteDescription = "The housing directory of people you probably know";
const siteImage = "/images/meta/og.png";
const siteURL = "https://www.directorysf.com/";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
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
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={notoSerif.className}>
        <Suspense fallback={<LoadingSpinner />}>
          <PHProvider>
            <AuthContextProvider>
              {/* <PostHogPageView /> */}

              {children}
              <Toaster />
            </AuthContextProvider>
          </PHProvider>
        </Suspense>
        <div id="modal-root"></div>
      </body>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </html>
  );
}
