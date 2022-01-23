import { FC,useEffect,useState } from "react"
import { GrLineChart } from "react-icons/gr"
import { RankingList } from "../atoms/rankingList"
import { AppContainer } from "../layout/AppContainer"
import { IUser } from "@/domain/user"
import { RankingAPI } from "@/handler/api/ranking"

interface IProps {
  className?: string
}

export const SecRankings: FC<IProps> = ({className}) => {

  const [rankings, setRankings] = useState<IUser[]>([])

  // スレッド一覧を取得
  useEffect(() => {
    (async () => {
      const rankings = await RankingAPI.getUserRanking()
      setRankings(rankings)
    })()
  }, [])

  return (
    <div className={className}>
      <AppContainer>
        <h3 className="flex items-center mb-4 text-2xl font-semibold">
          <GrLineChart className="mr-2"/>
          Top Rankers
        </h3>
        <div className="divide-y">
          
        <div className="grid grid-cols-12 mb-3 text-center text-gray-500 px-3 border-b border-gray-300 pb-3">
          <span>Rank</span>
          <span className="col-span-6 ml-2 text-center">User</span>
          <span className="col-span-2">Score</span>
          <span className="col-span-2">Trophy</span>
          
        </div>

        <>
          {rankings.map((ranking,key)=>{
            return <RankingList key={key} ranking={ranking}/>
          })}
        </>

        </div>
      </AppContainer>
    </div>
  )
}