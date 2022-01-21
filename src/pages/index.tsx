import { SecDiscussion } from "@/components/pages/SecDiscussion"
import { SecHero } from "@/components/pages/SecHero"
import { SecRankings } from "@/components/pages/SecRankings"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="my-20 space-y-20">
      <SecHero/>
      <SecDiscussion/>
      <SecRankings/>
    </div>
  )
}
export default Home
