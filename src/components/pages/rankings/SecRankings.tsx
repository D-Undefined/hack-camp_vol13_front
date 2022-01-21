import { RankingList } from "@/components/atoms/rankingList"
import { AppContainer } from "@/components/layout/AppContainer"
import { FC } from "react"

export const SecRankings: FC = () => {
  return (
    <div className="my-12 min-h-screen">
      <AppContainer>
        <div className="grid grid-cols-12 mb-3 text-center text-gray-500">
          <span>Rank</span>
          <span>Tier</span>
          <span className="col-span-7 ml-2 text-left">User</span>
          <span className="col-span-3">Medals</span>
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