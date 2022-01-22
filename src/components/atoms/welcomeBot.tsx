import { FC, useEffect, useState } from "react"
import { Avatar } from "./avatar"

export const WelcomeBot: FC = () => {
  const [botMsg, setBotMsg] = useState<string>("")
  const createMsg = () => {
    // TODO メッセージのバリエーション増やす
    const messages = [
      "やぁ！ メッセージを作成してみよう！",
      "やぁ！ メッセージを作成してみよう！",
      "やぁ！ メッセージを作成してみよう！",
      "やぁ！ メッセージを作成してみよう！",
    ]
    const messageIndex = Math.floor(Math.random() * messages.length)
    return messages[messageIndex]
  }

  useEffect(() => {
    setBotMsg(createMsg())
  }, [])

  return(
    <div className="flex my-4">
      <div className="mx-4">
        <Avatar/>
      </div>
      <div className="py-2 px-4 w-full bg-yellow-50 rounded border-2 border-yellow-200">
        <span className="flex">
          <div className="w-full">
            <span className="flex text-sm text-gray-400">
              <p className="font-bold text-gray-600">Welcome Bot</p>
              <span className="px-1 font-bold text-gray-600">  •  </span>
              <p>Now</p>
            </span>
            <div className="py-4 text-lg leading-relaxed text-gray-500">
              <p>{botMsg}</p>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}