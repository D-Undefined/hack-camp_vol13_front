import { IThread } from "@/domain/thred"
import { IUser } from "@/domain/user"
import { VoteAPI } from "@/handler/api/vote"
import { fromNow } from "@/handler/utils"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"
import { Avatar } from "./avatar"
import { DiscussionVoteBtn } from "./discussionVoteBtn"

interface IProps {
  className?: string,
  thread: IThread,
  user: IUser
}

export const DiscussionList: FC<IProps> = ({className, thread, user}) => {
  const router = useRouter()


  return (
    <div className={className}>
      <div className="flex items-center py-2 px-3 w-full hover:bg-fuchsia-50 cursor-pointer">
        <Avatar className="mx-3"/>
        <div className="w-full text-xl" onClick={() => router.push(`/discussion/${thread.id}`)}>
          <p className="mb-1 font-semibold tracking-normal">{thread.name}</p>
          <p className="text-sm text-gray-400">
            {thread.uid}
            <span className="px-1 font-bold text-gray-600">  •  </span>
            作成日 {fromNow(thread.created_at)}
          </p>
        </div>
        <DiscussionVoteBtn user={user} thread={thread}/>
      </div>
    </div>
  )
}