import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/markdown.css"
import { Noto_Sans_KR } from "@next/font/google"

// If loading a variable font, you don't need to specify the font weight
const defaultfont = Noto_Sans_KR({ subsets: ["latin"], weight: "100" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={defaultfont.className}>
      <Component {...pageProps} />
    </main>
  )
}
