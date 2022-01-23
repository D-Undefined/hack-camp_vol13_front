import { IThread } from "@/domain/thred"
import { IGetThreadVoteRes } from "@/interface/handler/api/vote"
import { FC } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

interface IProps {
  thread: IThread,
  votedComment: IGetThreadVoteRes | undefined
}

export const DiscussionVoteBtnDisabled: FC<IProps> = ({thread, votedComment}) => {
  return (
    <div className="">
      {
        <div className="flex justify-center items-center text-xl text-center text-gray-400">
          {
            votedComment?.is_up ? 
            <span className="p-1 bg-blue-400 rounded-l-xl border border-gray-300 duration-300">
              <BiUpArrow className="text-white cursor-not-allowed"/>
            </span>
            :
            <span className="p-1 bg-gray-200 rounded-l-xl border border-gray-300 duration-300">
              <BiUpArrow className="cursor-not-allowed"/>
            </span>
          }
          <span className="px-2 bg-gray-200 border-y border-gray-300">{`${thread.vote_cnt}`}</span>
          {
            !votedComment?.is_up ? 
            <span className="p-1 bg-red-400 rounded-r-xl border border-gray-300 duration-300">
              <BiDownArrow className="text-white cursor-not-allowed"/>
            </span>
            :
            <span className="p-1 bg-gray-200 rounded-r-xl border border-gray-300 duration-300">
              <BiDownArrow className="cursor-not-allowed"/>
            </span>
          }
        </div>
      }
    </div>
  )
}