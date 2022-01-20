import Image from "next/image"
import { FC } from "react"
import { VoteBtn } from "./voteBtn"

interface IProps  {
  content: string
}

export const DiscussionCard: FC<IProps> = ({content}) => {
  return (
    <div className="flex my-4">
      <div className="mx-4">
        <Image className="rounded-full" width={40} height={40} src="https://placehold.jp/100x100.png" alt="dd"/>
      </div>
      <div className="py-2 px-4 w-full bg-white rounded border border-gray-200">
        <div className="flex">
          <div className="w-full">
            <span className="flex text-xs text-gray-400">
              <p>かずやん</p>
              <span className="px-1 font-bold text-gray-600">  •  </span>
              <p>3 日前</p>
              <span className="px-1 font-bold text-gray-600">  •  </span>
              <p className="cursor-pointer">リプライ</p>
            </span>
            <div className="py-4 text-sm text-gray-500">
              <p>{content}</p>
            </div>
          </div>
          <div className="flex items-center">
            <VoteBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}