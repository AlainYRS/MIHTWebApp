import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ContextProvider } from "@/context/AppContext";
import InterComp from "@/complements/components/InternationalizationComp/InternationalizationComp";
import MetaPixelTracker from "@/app/MetaPixelTracker";

const inter = Inter({ subsets: ["latin"] });
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

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
        {/* Google Analytics tag (gtag.js) */}
        <Script
          async
          src={
            "https://www.googletagmanager.com/gtag/js?id=" +
            process.env.NEXT_PUBLIC_ANALYTICS_ID
          }
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `}
        </Script>

        {/* Meta Pixel base */}
        {META_PIXEL_ID ? (
          <Script id="meta-pixel-base" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
            `}
          </Script>
        ) : null}
      </head>

      <body className={inter.className}>
        {META_PIXEL_ID ? <MetaPixelTracker pixelId={META_PIXEL_ID} /> : null}

        <ContextProvider>
          <InterComp 
            Langs={[
              {
                language:'Español',
                locale:'es-MX',
                icon:'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/MXNIcon_350x350.webp?alt=media&token=770ca68f-7880-408c-a450-e1ea0c37902d',
                country:'MXN',
                alt:'Español',
                prioritario:true,
                width:70,
                height:70,
                fill:false,
              },
              {
                language:'English',
                locale:'en-US',
                icon:'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/USAIcon_350x350.webp?alt=media&token=e8924924-a91f-4b0f-8263-82e9f42c58e9',
                country:'USA',
                alt:'English',
                prioritario:true,
                width:70,
                height:70,
                fill:false,
              },
                // {
                // language:'French',
                // locale:'fr-CA',
                // icon:'https://firebasestorage.googleapis.com/v0/b/mihottacoswebapp.appspot.com/o/CADIcon_350x350.webp?alt=media&token=deef3bae-14fd-403c-a7a4-3453da7ff33b',
                // country:'FR',
                // alt:'French',
                // prioritario:true,
                // width:70,
                // height:70,
                // fill:false,
                // },
            ]}
            Position='fixed'
            BackgroundColor='black'
            Bottom="4rem"
            Left="0px"
            ShowLangs="oneBYone"
          />
          {children}
        </ContextProvider>

        {META_PIXEL_ID ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}
      </body>
    </html>
  );
}