import FirebaseAuth from "@/handler/firebase/auth"
import type { NextPage } from "next"
import { firebaseClient } from "../handler/firebase/client"

const Home: NextPage = () => {
  const clicked = () => {
    const fbApp = firebaseClient()
    const fbAuth = new FirebaseAuth(fbApp)
    fbAuth.githubLogin()
  }
  return (
    <div className="p-24">
      <button onClick={clicked} className="bg-violet-200 rounded">button</button>
    </div>
  )
}
export default Home
