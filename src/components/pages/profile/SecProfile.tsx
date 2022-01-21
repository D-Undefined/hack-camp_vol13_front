import Image from "next/image"
import { FC } from "react"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"

export const SecProfile: FC = () => {
  return (
    <div className="flex items-center space-x-7 text-gray-600">
      <div>
        <Image className="rounded-full" src="https://placehold.jp/200x200.png" alt="" width={200} height={200}/>
      </div>
      <div className="p-4 space-y-2 w-full rounded-md border border-gray-200">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">kazuki komori</h3>
        <p>Doshisha Univ</p>
        <p>Osaka Japan</p>
        <p className="text-gray-400">9 か月前に参加</p>
        <span className="flex space-x-2 text-sm">
          <p className="flex">
            <AiOutlineTwitter className="mr-1 text-2xl"/>
            @D_kazuyan
          </p>
          <p className="flex">
            <AiOutlineGithub className="mr-1 text-2xl"/>
            @kazuki-komori
          </p>
        </span>
      </div>
    </div>
  )
}