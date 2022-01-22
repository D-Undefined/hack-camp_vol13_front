import { DiscussionList } from "@/components/atoms/discussionList"
import { FC } from "react"
import { AppContainer } from "../../layout/AppContainer"

interface IProps {
  className?: string
}

export const SecDiscussions: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <AppContainer>
        <h3 className="flex items-center mb-4 text-2xl font-semibold">
          Discussions
        </h3>
        <div className="divide-y">
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
        </div>
      </AppContainer>
    </div>
  )
}
