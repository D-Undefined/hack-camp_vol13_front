import { RankingList } from "@/components/atoms/rankingList"
import { AppContainer } from "@/components/layout/AppContainer"
import { FC ,useEffect,useState } from "react"
import { IUser } from "@/domain/user"
import { RankingAPI } from "@/handler/api/ranking"

export const SecRankings: FC = () => {
  const [rankings, setRankings] = useState<IUser[]>([])

  // スレッド一覧を取得
  useEffect(() => {
    (async () => {
      const rankings = await RankingAPI.getUserRanking()
      setRankings(rankings)
      console.log("##@",rankings)
    })()
  }, [])


  return (
    <div className="my-12 min-h-screen">
      <AppContainer>
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

      </AppContainer>
    </div>
  )
}
