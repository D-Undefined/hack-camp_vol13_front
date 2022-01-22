import { Avatar } from "@/components/atoms/avatar"
import { AppContainer } from "@/components/layout/AppContainer"
import { IUser } from "@/domain/user"
import { ThreadAPI } from "@/handler/api/thread"
import { IParamCreateThread } from "@/interface/handler/api/thread"
import { userSelector } from "@/redux/selectors/user"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from "react-redux"

const DiscussionNew: NextPage = () => {
  const [user, setUser] = useState<IUser>(useSelector(userSelector))
  const router = useRouter()

  const createThread = async() => {
    const params: IParamCreateThread = {
      uid: user.uid,
      name: "テストスレッド"
    }
    const thread = await ThreadAPI.postThread(params)
    router.push(`/discussion/${thread.id}`)
  }

  return(
    <div className="my-20 min-h-screen">
      <AppContainer>
        <div className="grid grid-cols-5 rounded-sm border border-gray-300">
          <div className="text-center bg-gray-100 p-7">
            {/* <Avatar className="flex items-center mb-3"/> */}
            <div className="flex items-center mb-3">
              <Image className="rounded-full" width={80} height={80} src="https://placehold.jp/100x100.png" alt="icon" />
            </div>
            <p className="text-xl text-fuchsia-500">kazuki komori</p>
          </div>
          <div className="col-span-4 p-8">
            <h3 className="text-gray-800 mb-2">Thread Title</h3>
            <input type="text" placeholder="スレッドのタイトル" className="py-2 px-5 w-full text-xl text-gray-600 rounded-md border border-gray-300"/>
            <button 
              className="block py-2 px-4 mt-12 ml-auto font-bold tracking-wider text-center text-white bg-gray-800 rounded-3xl hover:opacity-70 duration-500 cursor-pointer"
              onClick={() => createThread()}
              >
              公開する
            </button>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default DiscussionNew
