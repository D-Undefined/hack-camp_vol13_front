import { IUser } from "@/domain/user"
import { CommentAPI } from "@/handler/api/comment"
import { userSelector } from "@/redux/selectors/user"
import { FC, useState } from "react"
import { useSelector } from "react-redux"
import { Avatar } from "./avatar"

interface IProps {
  thread_id: number | undefined,
  LoadThread(discussionId: number): void
}

export const DiscussionForm: FC<IProps> = ({thread_id, LoadThread}) => {
  const [inputText, setInputText] = useState("")
  const [user, setUser] = useState<IUser>(useSelector(userSelector))

  // textarea の文字を取得し, 行数を計算する
  const calcTextAreaHeight = (inputText: string) => {
    const rowsNum = inputText.split('\n').length
    return rowsNum
  }

  // コメント作成
  const createComment = async() => {
    if(!thread_id) {
      console.error("invalid thread id")
      return
    }
    await CommentAPI.postComment({thread_id: thread_id, uid: user.uid, body: inputText})
    await LoadThread(thread_id)
  }


  return (
    <div className="flex">
      <span className="mx-4">
      <Avatar imgSrc={user.image_url}/>
      </span>
      <div className="py-10 px-4 w-full text-lg text-gray-500 bg-white rounded-sm border border-gray-200">
        <textarea
          onChange={e => setInputText(e.target.value)}
          className="p-3 w-full rounded-sm border border-gray-200 focus:outline-2 focus:outline-fuchsia-500 focus:outline" 
          placeholder="あなたのコメントを書きましょう。フレンドリーに、そしてアイデアに着目することを忘れずに。"
          rows={calcTextAreaHeight(inputText)}
        ></textarea>
        <span className="flex mt-3">
          <p className="text-sm text-gray-400">投稿は反映後、掲載されます</p>
          <button 
            className="py-2 px-4 ml-auto font-bold tracking-wider text-center text-white bg-fuchsia-600 rounded-3xl hover:opacity-70 duration-500 cursor-pointer"
            onClick={createComment}
          >
            投稿する
          </button>
        </span>
      </div>
    </div>
  )
}