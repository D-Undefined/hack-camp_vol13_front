import { AppHeader } from "@/components/layout/AppHeader"
import { store } from "@/redux/store"
import "@/styles/global.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppHeader/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
