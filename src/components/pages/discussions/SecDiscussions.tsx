import { DiscussionList } from "@/components/atoms/discussionList"
import { IThread } from "@/domain/thred"
import { ThreadAPI } from "@/handler/api/thread"
import { createRouter, Router, useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { GoCommentDiscussion } from "react-icons/go"
import { AppContainer } from "../../layout/AppContainer"

interface IProps {
  className?: string
}

export const SecDiscussions: FC<IProps> = ({className}) => {
  const router = useRouter()
  const [threads, setThreads] = useState<IThread[]>([])

  // スレッド一覧を取得
  useEffect(() => {
    (async () => {
      const threads = await ThreadAPI.getThreads()
      setThreads(threads)
    })()
  }, [])
  
  return (
    <div className={className}>
      <AppContainer>
        <div className="flex items-center mb-4 w-full text-2xl font-semibold text-gray-600">
          <GoCommentDiscussion className="mx-6"/>
          <h3>Discussions</h3>
          <button 
            className="py-2 px-4 ml-auto text-lg font-bold tracking-wider text-center text-white bg-gray-800 rounded-3xl hover:opacity-70 duration-500 cursor-pointer"
            onClick={() => {router.push("/discussion/new")}}
          >
            トピックを作成
          </button>
        </div>
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
