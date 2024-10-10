import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ContextProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hot Tacos",
  description: "Developed by Alain Y Rivera S",
  manifest: '/manifest.json',
  icons: { apple: '/Icons/HTIcons/icon-512x512.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Analytics tag (gtag.js) --> */}
        <Script async src={"https://www.googletagmanager.com/gtag/js?id="+process.env.ANALYTICS_ID}></Script>
        <Script id='google-analytics'>
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${process.env.ANALYTICS_ID}');
            `
          }
        </Script>
      </head>
      <ContextProvider>
        <body className={inter.className}>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}