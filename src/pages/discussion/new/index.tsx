import { Avatar } from "@/components/atoms/avatar"
import { AppContainer } from "@/components/layout/AppContainer"
import { NextPage } from "next"

const DiscussionNew: NextPage = () => {
  return(
    <div className="my-20 min-h-screen">
      <AppContainer>
        <div className="grid grid-cols-5 rounded-sm border border-gray-300">
          <div className="text-center bg-gray-100">
            <Avatar className="flex items-center w-full"/>
            <p>kazuki komori</p>
          </div>
          <div className="col-span-4 p-8">
            <input type="text" placeholder="スレッドのタイトル" className="py-2 px-5 w-full text-xl text-gray-600 rounded-md border border-gray-300"/>
            <button 
              className="block py-2 px-4 mt-12 ml-auto font-bold tracking-wider text-center text-white bg-gray-800 rounded-3xl hover:opacity-70 duration-500 cursor-pointer"
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
