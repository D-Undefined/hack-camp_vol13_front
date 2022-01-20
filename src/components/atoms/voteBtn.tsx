import { FC } from "react"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

export const VoteBtn: FC = () => {
  return (
    <div className="justify-center text-center text-gray-500">
      <BiUpArrow className="cursor-pointer" color="#6b7280"/>
      <div>1</div>
      <BiDownArrow className="cursor-pointer" color="#6b7280"/>
    </div>
  )
}