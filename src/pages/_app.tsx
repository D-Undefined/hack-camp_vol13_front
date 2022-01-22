import { AppFooter } from "@/components/layout/AppFooter"
import { AppHeader } from "@/components/layout/AppHeader"
import { loadUserFromStorage, login } from "@/redux/slices/user"
import { store } from "@/redux/store"
import "@/styles/global.css"
import type { AppProps } from "next/app"
import { Provider, useDispatch } from "react-redux"
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <AppHeader/>
      <Component {...pageProps} />
      <AppFooter/>
    </Provider>
  )
}

export default MyApp
