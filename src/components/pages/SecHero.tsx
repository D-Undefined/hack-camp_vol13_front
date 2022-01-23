import { Bubble } from "@/components/atoms/bubble"
import { AppContainer } from "@/components/layout/AppContainer"
import { IUser } from "@/domain/user"
import FirebaseAuth from "@/handler/firebase/auth"
import { userSelector } from "@/redux/selectors/user"
import { login, logout } from "@/redux/slices/user"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { BsGithub } from "react-icons/bs"
import { MdOutlineDeviceUnknown } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

interface IProps {
  className?: string
}

export const SecHero: FC<IProps> = ({className}) => {
  const [user, setUser] = useState<IUser>(useSelector(userSelector))
  const FBAuth = new FirebaseAuth()

  const dispatch = useDispatch()
  const router = useRouter()

  const clicked = async() => {
    const githubUser = await FBAuth.githubLogin()
    if (githubUser) {
      dispatch(login(githubUser))
      router.push(`/profile`)
    }
  }

  // useEffect(() => {
  //   if(user.uid === "") {
  //     setUser(user)
  //   }
  // }, [user])

  const clickLogout = () => {
    dispatch(logout())
    location.reload()
  }

  return (
    <div className={className}>
      <AppContainer>
        <Bubble></Bubble>
        <div className="flex relative z-10 pb-16 border-b-2 border-fuchsia-200 pointer-events-none">
          <div className="px-10 w-full">
            <h1 className="text-4xl font-bold">Share your Idea.</h1>
            <div className="mt-6 text-lg">
              <p>Engineer Board（仮）はふとしたアイデアをシェア・議論できるエンジニア向けの SNS です。</p>
              <p>あなたの今日の疑問は明日の誰かのアイデアへとつながるでしょう。</p>
            </div>
            <div className="py-10 mx-auto w-full">
              {
                user.uid === ""
                ?
                <button onClick={clicked} className="flex justify-center items-center p-3 mx-auto w-52 font-semibold tracking-wider text-white bg-gray-800 rounded-md hover:opacity-80 duration-500 pointer-events-auto">
                  <BsGithub className="mr-1"/>
                  Github でログイン
                </button>
                :
                <button onClick={clickLogout} className="flex justify-center items-center p-3 mx-auto w-52 font-semibold tracking-wider text-gray-600 bg-gray-300 rounded-md hover:opacity-80 duration-500 pointer-events-auto">
                <BsGithub className="mr-1"/>
                ログアウト
              </button>              
              }
              <button className="flex justify-center items-center p-3 mx-auto mt-6 w-52 font-semibold tracking-wider text-fuchsia-600 hover:text-white bg-white hover:bg-fuchsia-600 rounded-md border-2 border-fuchsia-600 duration-500 pointer-events-auto">
                <MdOutlineDeviceUnknown className="mr-1"/>
                匿名で参加する
              </button>
            </div>
          </div>
          <Image className="inline-block" src="/home-hero.svg" alt="ヒーロー画像" width={800} height={800}/>
        </div>
      </AppContainer>
    </div>
  )
}
