import { DiscussionCard } from "@/components/atoms/discussionCard"
import { AppContainer } from "@/components/layout/AppContainer"
import { NextPage } from "next"

const DiscussionPage: NextPage = () => {
  return (
    <div>
      <AppContainer>
        <DiscussionCard content="hoge"/>
      </AppContainer>
    </div>
  )
}

export default DiscussionPage