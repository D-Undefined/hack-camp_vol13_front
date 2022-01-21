import { FC } from "react"
import { GrLineChart } from "react-icons/gr"
import { RankingList } from "../atoms/rankingList"
import { AppContainer } from "../layout/AppContainer"

interface IProps {
  className?: string
}

export const SecRankings: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <AppContainer>
        <h3 className="flex items-center mb-4 text-2xl font-semibold">
          <GrLineChart className="mr-2"/>
          Top Rankers
        </h3>
        <div className="divide-y">
          <RankingList/>
          <RankingList/>
          <RankingList/>
        </div>
      </AppContainer>
    </div>
  )
}