import { IUser } from "@/domain/user"
import Image from "next/image"
import { FC } from "react"
import { AiOutlineGithub } from "react-icons/ai"

interface IProps {
  user: IUser
}

export const SecProfile: FC<IProps> = ({user}) => {
  return (
    <div className="flex items-center space-x-7 text-gray-600">
      <div>
        <Image className="rounded-full" src={user.image_url} alt="" width={200} height={200}/>
      </div>
      <div className="p-4 space-y-2 w-full rounded-md border border-gray-200">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">{user.user_name}</h3>
        <p>{user.belong}</p>
        {/* <p>{user.}</p> */}
        {/* <p className="text-gray-400">9 か月前に参加</p> */}
        <span className="flex space-x-2 text-sm">
          {/* <p className="flex">
            <AiOutlineTwitter className="mr-1 text-2xl"/>
            @{user.}
          </p> */}
          <p className="flex">
            <AiOutlineGithub className="mr-1 text-2xl"/>
            @{user.github}
          </p>
        </span>
      </div>
    </div>
  )
}