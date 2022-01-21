import { FC } from "react"
import { FaMedal } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"
import { Avatar } from "./avatar"

export const RankingList: FC = () => {
  return (
    <div className="grid grid-cols-12 items-center px-3 text-center text-gray-400 hover:bg-yellow-50 duration-300 cursor-pointer">
      <span>1</span>
      <div>
        <GiDiamondTrophy className="mx-auto text-4xl text-cyan-500"/>
      </div>
      <Avatar/>
      <span className="col-span-4 text-gray-600">kazuki komori</span>
      <span className="col-span-2">9 か月前に参加</span>
      <div className="flex col-span-3">
        <FaMedal className="mx-auto text-xl text-yellow-600"/>
        <span className="font-bold text-yellow-600">10</span>
        <FaMedal className="mx-auto text-xl text-zinc-400"/>
        <span className="font-bold text-zinc-400">10</span>
        <FaMedal className="mx-auto text-xl text-amber-700"/>
        <span className="font-bold text-amber-700">10</span>
      </div>
    </div>
  )
}