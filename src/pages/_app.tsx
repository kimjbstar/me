import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/markdown.css"
import { Roboto } from "@next/font/google"
import { prefix } from "@/config/config"
import { AppProvider } from "@/context/context"
import Head from "next/head"
import { GoogleAnalytics } from "@/components/google-analytics"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import { useRouter } from "next/router"

const defaultfont = Roboto({ weight: "300", subsets: ["greek"] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <GoogleAnalytics></GoogleAnalytics>
      <AppProvider value={{ prefix }}>
        <main className={defaultfont.className}>
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </>
  )
}
