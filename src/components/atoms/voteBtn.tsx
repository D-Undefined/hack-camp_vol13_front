import { FC } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

interface IProps {
  vote_cnt: number
}

export const VoteBtn: FC<IProps> = ({vote_cnt}) => {
  return (
    <div className="flex justify-center items-center text-xl text-center text-gray-400">
      <span className="p-1 rounded-l-xl border border-gray-300">
        <BiUpArrow className="cursor-pointer"/>
      </span>
      <span className="px-2 border-y border-gray-300">{`${vote_cnt}`}</span>
      <span className="p-1 rounded-r-xl border border-gray-300">
        <BiDownArrow className="cursor-pointer"/>
      </span>
    </div>
  )
}