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

  useEffect(() => {
    (async() => {
      if(discussionId) {
        const thread = await ThreadAPI.getThreadByID({id: `${discussionId}`})
        setThread(thread)
      }
    })()
  }, [discussionId])

  return (
    <div className="py-16 min-h-screen bg-fuchsia-50">
      <AppContainer>
        <h1 className="mb-10 text-3xl font-bold">{thread.name}</h1>
        {thread.Comments.map((comment, idx) => (
          <DiscussionCard key={idx} comment={comment}/>
        ))}
        {/* <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/> */}
        <DiscussionForm/>
      </AppContainer>
    </div>
  )
}

export default DiscussionPage
