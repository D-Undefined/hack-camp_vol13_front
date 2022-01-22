import { IComment } from "@/domain/comment"
import { FC } from "react"
import { BsChatText } from "react-icons/bs"
import { Avatar } from "./avatar"
import { VoteBtn } from "./voteBtn"

interface IProps  {
  comment: IComment
}

export const DiscussionCard: FC<IProps> = ({comment}) => {
  return (
    <div className="flex my-4">
      <div className="mx-4">
        <Avatar/>
      </div>
      <div className="py-2 px-4 w-full bg-white rounded border border-gray-200">
        <span className="flex">
          <div className="w-full">
            <span className="flex text-sm text-gray-400">
              <p className="text-gray-600">kazuyan</p>
              <span className="px-1 font-bold text-gray-600">  •  </span>
              <p>3 日前</p>
              <span className="px-1 font-bold text-gray-600">  •  </span>
              <BsChatText className="mx-1"/>
              <p className="cursor-pointer">リプライ</p>
            </span>
            <div className="py-4 text-lg leading-relaxed text-gray-500">
              <p>{comment.body}</p>
            </div>
          </div>
          <div className="flex items-center">
            <VoteBtn/>
          </div>
        </span>
      </div>
    </div>
  )
}