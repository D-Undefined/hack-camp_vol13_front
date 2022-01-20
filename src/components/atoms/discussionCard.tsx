import { FC } from "react"

interface IProps  {
  content: string
}

export const DiscussionCard: FC<IProps> = ({content}) => {
  return (
    <div>{content}</div>
  )
}