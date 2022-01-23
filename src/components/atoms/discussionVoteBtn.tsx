import { IThread } from "@/domain/thred"
import { IUser } from "@/domain/user"
import { VoteAPI } from "@/handler/api/vote"
import { FC } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

interface IProps {
  thread: IThread,
  user: IUser
}

export const DiscussionVoteBtn: FC<IProps> = ({user, thread}) => {
  const voteUp = async() => {
    await VoteAPI.postVoteThread({thread_id: thread.id, uid: user.uid, is_up: true})
    // await LoadThread(comment.thread_id)
  }
  const voteDown = async() => {
    await VoteAPI.postVoteThread({thread_id: thread.id, uid: user.uid, is_up: false})
    // await LoadThread(comment.thread_id)
  }

  return (
    <div className="">
      {
        <div className="flex justify-center items-center text-xl text-center text-gray-400">
          <span className="p-1 hover:bg-blue-100 rounded-l-xl border border-gray-300 duration-300">
            {/* <BiUpArrow className="cursor-pointer"/> */}
            <BiUpArrow onClick={voteUp} className="cursor-pointer"/>
          </span>
          <span className="px-2 border-y border-gray-300">{`${thread.vote_cnt}`}</span>
          <span className="p-1 hover:bg-red-100 rounded-r-xl border border-gray-300 duration-300">
            {/* <BiDownArrow className="cursor-pointer"/> */}
            <BiDownArrow onClick={voteDown} className="cursor-pointer"/>
          </span>
        </div>
      }
    </div>
  )
}