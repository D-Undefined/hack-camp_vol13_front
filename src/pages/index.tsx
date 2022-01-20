import FirebaseAuth from "@/handler/firebase/auth"
import { login } from "@/redux/slices/user"
import type { NextPage } from "next"
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
    <div className="p-24">
      <button onClick={clicked} className="bg-violet-200 rounded">button</button>
      {/* <p>{user}</p> */}
    </div>
  )
}
export default Home
