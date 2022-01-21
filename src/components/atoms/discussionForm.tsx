import { FC, useState } from "react"
import { Avatar } from "./avatar"

export const DiscussionForm: FC = () => {
  // textarea の文字を取得し, 行数を計算する
  const calcTextAreaHeight = (inputText: string) => {
    const rowsNum = inputText.split('\n').length
    return rowsNum
  }

  const [inputText, setInputText] = useState("")

  return (
    <div className="flex">
      <span className="mx-4">
        <Avatar/>
      </span>
      <div className="py-10 px-4 w-full text-sm text-gray-500 bg-white rounded-sm border border-gray-200">
        <textarea
          onChange={e => setInputText(e.target.value)}
          className="p-3 w-full rounded-sm border border-gray-200 focus:outline-2 focus:outline-violet-400 focus:outline" 
          placeholder="あなたのコメントを書きましょう。フレンドリーに、そしてアイデアに着目することを忘れずに。"
          rows={calcTextAreaHeight(inputText)}
        ></textarea>
        <span className="flex mt-3">
          <p className="text-xs text-gray-400">投稿は反映後、掲載されます</p>
          <button 
            className="py-2 px-4 ml-auto font-bold tracking-wider text-center text-white bg-violet-500 rounded-3xl hover:shadow-xl duration-500 cursor-pointer"
          >
            投稿する
          </button>
        </span>
      </div>
    </div>
  )
}