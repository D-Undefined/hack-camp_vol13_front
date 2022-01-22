import { DiscussionCard } from "@/components/atoms/discussionCard"
import { DiscussionForm } from "@/components/atoms/discussionForm"
import { AppContainer } from "@/components/layout/AppContainer"
import { initThread } from "@/domain/state/thread"
import { IThread } from "@/domain/thred"
import { ThreadAPI } from "@/handler/api/thread"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const DiscussionPage: NextPage = () => {
  
  const [thread, setThread] = useState<IThread>(initThread)
  const router = useRouter()
  const discussionId = router.query.discussion_id
  
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
        {/* discussionId が正しくセットされているかcheck */}
        <DiscussionForm LoadThread={LoadThread} thread_id={parseInt(`${discussionId}`)}/>
      </AppContainer>
    </div>
  )
}

export default DiscussionPage
