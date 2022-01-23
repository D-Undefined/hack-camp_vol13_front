import { IUser } from "@/domain/user"
import { FC } from "react"
import { FaMedal } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"
import { Avatar } from "./avatar"

interface IProps {
  className?: string,
  ranking: IUser
}


export const RankingList: FC<IProps> = ({ranking}) => {

  return (
    <div className="grid grid-cols-12 items-center px-3 text-center text-gray-400 hover:bg-yellow-50 duration-300 cursor-pointer">
      <span>1</span>

      <div className="flex col-span-2"></div>

      <Avatar className="col-span-1 text-center" />
      <span className="col-span-4 text-gray-600 text-left">
        {ranking.user_name}
      </span>
      
      <div className="flex col-span-1">
        {ranking.score}
      </div>
      <div className="flex col-span-2">
        {1000<=ranking.score && (
          <GiDiamondTrophy className="mx-auto text-4xl text-yellow-500" />
        )}
        {100<= ranking.score && ranking.score<1000 && (
          <GiDiamondTrophy className="mx-auto text-4xl text-gray-400" />
        )}

        {0< ranking.score && ranking.score<100 && (
          <GiDiamondTrophy className="mx-auto text-4xl text-bronze-300" />
        )}

      </div>
      
    </div>
  )
}
