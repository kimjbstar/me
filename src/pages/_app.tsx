import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/markdown.css"
import { Roboto } from "@next/font/google"
import { prefix } from "@/config/config"
import { AppProvider } from "@/context/context"
import Head from "next/head"
import Script from "next/script"

const defaultfont = Roboto({ weight: "300", subsets: ["greek"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('NEXT_PUBLIC_GA_TRACKING_ID','${process.env.NEXT_PUBLIC_GA_TRACKING_ID}')
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <AppProvider value={{ prefix }}>
        <main className={defaultfont.className}>
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </>
  )
}
