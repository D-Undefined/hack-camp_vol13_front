import { IComment } from "@/domain/comment"
import { IUser } from "@/domain/user"
import { VoteAPI } from "@/handler/api/vote"
import { FC, useState } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

interface IProps {
  comment: IComment,
  user: IUser,
  LoadThread(discussionId: number): void
}

export const VoteBtn: FC<IProps> = ({comment, user, LoadThread}) => {
  // const [isVote, setVote] = useState<boolean>(comment.)
  const voteUp = async() => {
    await VoteAPI.postVoteComment({comment_id: comment.id, uid: user.uid, is_up: true})
    await LoadThread(comment.thread_id)
  }
  const voteDown = async() => {
    await VoteAPI.postVoteComment({comment_id: comment.id, uid: user.uid, is_up: false})
    await LoadThread(comment.thread_id)
  }

  return (
    <div className="">
      {
        <div className="flex justify-center items-center text-xl text-center text-gray-400">
          <span className="p-1 hover:bg-blue-100 rounded-l-xl border border-gray-300 duration-300">
            <BiUpArrow onClick={voteUp} className="cursor-pointer"/>
          </span>
          <span className="px-2 border-y border-gray-300">{`${comment.vote_cnt}`}</span>
          <span className="p-1 hover:bg-red-100 rounded-r-xl border border-gray-300 duration-300">
            <BiDownArrow onClick={voteDown} className="cursor-pointer"/>
          </span>
        </div>
      }
    </div>
  )
}