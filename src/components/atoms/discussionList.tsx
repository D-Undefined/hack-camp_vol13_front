import { IThread } from "@/domain/thred"
import { fromNow } from "@/handler/utils"
import { useRouter } from "next/router"
import { FC } from "react"
import { Avatar } from "./avatar"
import { VoteBtn } from "./voteBtn"

interface IProps {
  className?: string,
  thread: IThread
}

export const DiscussionList: FC<IProps> = ({className, thread}) => {
const router = useRouter()

  return (
    <div className={className} onClick={() => router.push(`/discussion/${thread.id}`)}>
      <div className="flex items-center py-2 px-3 w-full hover:bg-fuchsia-50 cursor-pointer">
        <Avatar className="mx-3"/>
        <div className="w-full text-xl">
          <p className="mb-1 font-semibold tracking-normal">{thread.name}</p>
          <p className="text-sm text-gray-400">
            {thread.uid}
            <span className="px-1 font-bold text-gray-600">  •  </span>
            最終投稿 {fromNow(thread.created_at)}
          </p>
        </div>
        <VoteBtn vote_cnt={thread.vote_cnt}/>
      </div>
    </div>
  )
}