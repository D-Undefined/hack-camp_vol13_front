import { FC } from "react"
import { Avatar } from "./avatar"
import { VoteBtn } from "./voteBtn"

interface IProps {
  className?: string
}

export const DiscussionList: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <div className="flex items-center py-2 px-3 w-full hover:bg-fuchsia-50 cursor-pointer">
        <Avatar className="mx-3"/>
        <div className="w-full text-xl">
          <p className="mb-1 font-semibold tracking-normal">discussion タイトル</p>
          <p className="text-sm text-gray-400">
            かずやん
            <span className="px-1 font-bold text-gray-600">  •  </span>
            最終投稿 1分前
          </p>
        </div>
        <VoteBtn/>
      </div>
    </div>
  )
}