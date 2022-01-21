import { SecDiscussion } from "@/components/pages/SecDiscussion"
import { SecHero } from "@/components/pages/SecHero"
import { SecRankings } from "@/components/pages/SecRankings"
import FirebaseAuth from "@/handler/firebase/auth"
import { login } from "@/redux/slices/user"
import type { NextPage } from "next"
import Link from "next/link"
import { useDispatch } from "react-redux"

const Home: NextPage = () => {
  const FBAuth = new FirebaseAuth()

  const dispatch = useDispatch()
  const clicked = async() => {
    const githubUser = await FBAuth.githubLogin()
    if (githubUser) {
      dispatch(login(githubUser))  
    }
  }
  return (
    <div className="my-20 space-y-20">
      <SecHero/>
      <SecDiscussion/>
      <SecRankings/>
      <div>
        <a href="./profile">profile</a>
        <Link href="/discussion/1">
          <a>discussion page</a>
        </Link>
      </div>
      <button onClick={clicked} className="bg-violet-200 rounded">button</button>
    </div>
  )
}
export default Home
