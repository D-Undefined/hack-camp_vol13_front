import { DiscussionCard } from "@/components/atoms/discussionCard"
import { DiscussionForm } from "@/components/atoms/discussionForm"
import { WelcomeBot } from "@/components/atoms/welcomeBot"
import { AppContainer } from "@/components/layout/AppContainer"
import { IComment } from "@/domain/comment"
import { initThread } from "@/domain/state/thread"
import { IThread } from "@/domain/thred"
import { IUser } from "@/domain/user"
import { ThreadAPI } from "@/handler/api/thread"
import { userSelector } from "@/redux/selectors/user"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const DiscussionPage: NextPage = () => {
  
  const [thread, setThread] = useState<IThread>(initThread)
  const [user, setUser] = useState<IUser>(useSelector(userSelector))
  const router = useRouter()
  const discussionId = router.query.discussion_id


  // ユーザーが初訪問かチェック
  const isFirstVisit = (user: IUser, comments: IComment[]): boolean => {
    for(const comment of comments) {
      if (user.uid === comment.uid) {
        return false
      }
    }
    return true
  }

  const LoadThread = async(discussionId: number) => {
    const thread = await ThreadAPI.getThreadByID({id: `${discussionId}`})
    setThread(thread)
  }
  
  useEffect(() => {
    (async() => {
      const thread = await ThreadAPI.getThreadByID({id: `${discussionId}`})
      setThread(thread)
    })()
  }, [discussionId, setThread])

  return (
    <div className="py-16 min-h-screen bg-fuchsia-50">
      <AppContainer>
        <h1 className="mb-10 text-3xl font-bold">{thread.name}</h1>
        {thread.Comments.map((comment, idx) => (
          <DiscussionCard key={idx} comment={comment}/>
        ))}
        {isFirstVisit(user, thread.Comments) ? <WelcomeBot/> : <span></span>}
        {/* discussionId が正しくセットされているかcheck */}
        <DiscussionForm LoadThread={LoadThread} thread_id={parseInt(`${discussionId}`)}/>
      </AppContainer>
    </div>
  )
}

export default DiscussionPage
