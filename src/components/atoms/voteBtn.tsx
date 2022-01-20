import { FC } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

export const VoteBtn: FC = () => {
  return (
    <div className="justify-center text-center text-gray-400">
      <BiUpArrow className="cursor-pointer"/>
      <div>1</div>
      <BiDownArrow className="cursor-pointer"/>
    </div>
  )
}