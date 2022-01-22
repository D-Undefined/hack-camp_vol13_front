import { Avatar } from "@/components/atoms/avatar"
import { loadUserFromStorage, login } from "@/redux/slices/user"
import Link from "next/link"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppContainer } from "./AppContainer"

export const AppHeader: FC = () => {
  // ストレージから読み出す
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(login(loadUserFromStorage()))
  })
  
  return (
    <section className="h-16 text-white bg-gray-800">
      <AppContainer>
        <div className="flex items-center h-full">
          <Link href="/">
            <h2 className="text-xl cursor-pointer">Engineer Board (仮名)</h2>
          </Link>
          <Link href="/rankings">
            <a className="ml-auto hover:opacity-80 duration-500 cursor-pointer">Rankings</a>
          </Link>
          <Link href="/profile">
            <a>
              <Avatar className="ml-10 cursor-pointer"/>
            </a>
          </Link>
        </div>
      </AppContainer>
    </section>
  )
}