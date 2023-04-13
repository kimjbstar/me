import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/markdown.css"
import { Noto_Sans_KR } from "@next/font/google"
import { prefix } from "@/config/config"
import { AppProvider } from "@/context/context"

const defaultfont = Noto_Sans_KR({ subsets: ["latin"], weight: "100" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider value={{ prefix }}>
      <main className={defaultfont.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  )
}
