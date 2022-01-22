import { FC } from "react"
import { FaMedal } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"
import { Avatar } from "./avatar"

export const RankingList: FC = () => {
  return (
    <div className="grid grid-cols-12 items-center px-3 text-center text-gray-400 hover:bg-yellow-50 duration-300 cursor-pointer">
      <span>1</span>
      <Avatar className="col-span-2 text-center" />
      <span className="col-span-3 text-gray-600 text-left">kazuki komori</span>
      <span className="col-span-2">9 か月前に参加</span>
      <div className="flex col-span-3">
        <GiDiamondTrophy className="mx-auto text-4xl text-yellow-500" />
        <GiDiamondTrophy className="mx-auto text-4xl text-gray-400" />
      </div>
    </div>
  )
}
