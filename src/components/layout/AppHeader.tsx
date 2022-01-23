import { Avatar } from "@/components/atoms/avatar"
import { userSelector } from "@/redux/selectors/user"
import { loadUserFromStorage, login } from "@/redux/slices/user"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppContainer } from "./AppContainer"

export const AppHeader: FC = () => {
  const [user, setUser] = useState(useSelector(userSelector))
  // ストレージから読み出す
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(login(loadUserFromStorage()))
  }, [dispatch])
  
  return (
    <section className="relative z-10 h-16 text-white bg-gray-800">
      <AppContainer>
        <div className="flex items-center h-full">
          <Link href="/">
            <a>
              <h2 className="text-xl cursor-pointer">Engineer Board (仮名)</h2>
            </a>
          </Link>
          <Link href="/discussion">
            <a className="ml-auto hover:opacity-80 duration-500 cursor-pointer">Discussion</a>
          </Link>
          <Link href="/rankings">
            <a className="mx-6 hover:opacity-80 duration-500 cursor-pointer">Rankings</a>
          </Link>
          <Link href="/profile">
            <a>
              <Avatar imgSrc={user.image_url} className="ml-10 cursor-pointer"/>
            </a>
          </Link>
        </div>
      </AppContainer>
    </section>
  )
}
