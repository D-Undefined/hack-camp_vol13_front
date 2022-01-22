import { RankingList } from "@/components/atoms/rankingList"
import { AppContainer } from "@/components/layout/AppContainer"
import { FC } from "react"

export const SecRankings: FC = () => {
  return (
    <div className="my-12 min-h-screen">
      <AppContainer>
        <div className="grid grid-cols-12 mb-3 text-center text-gray-500 px-3 border-b border-gray-300 pb-3">
          <span>Rank</span>
          <span className="col-span-7 ml-2 text-center">User</span>
          <span className="col-span-3">Trophy</span>
        </div>
        <RankingList/>
        <RankingList/>
        <RankingList/>
        <RankingList/>
        <RankingList/>
      </AppContainer>
    </div>
  )
}
