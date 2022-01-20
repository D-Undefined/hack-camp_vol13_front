import { DiscussionCard } from "@/components/atoms/discussionCard"
import { AppContainer } from "@/components/layout/AppContainer"
import { NextPage } from "next"


const DiscussionPage: NextPage = () => {
  return (
    <div className="py-16 min-h-screen bg-violet-50">
      <AppContainer>
        <h1 className="mb-10 text-3xl font-bold">discussion タイトル</h1>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
        <DiscussionCard content="Lorem ipsum dolor sit amet consectetur."/>
      </AppContainer>
    </div>
  )
}

export default DiscussionPage