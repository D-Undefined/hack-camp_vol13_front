import { AppContainer } from "@/components/layout/AppContainer"
import Image from "next/image"
import { FC } from "react"
import { BsGithub } from "react-icons/bs"
import { MdOutlineDeviceUnknown } from "react-icons/md"

interface IProps {
  className?: string
}

export const SecHero: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <AppContainer>
        <div className="flex pb-16 border-b-2 border-fuchsia-200">
          <div className="px-10 w-full">
            <h1 className="text-4xl font-bold">Share your Idea.</h1>
            <div className="mt-6 text-lg">
              <p>Engineer Board（仮）はふとしたアイデアをシェア・議論できるエンジニア向けの SNS です。</p>
              <p>あなたの今日の疑問は明日の誰かのアイデアへとつながるでしょう。</p>
            </div>
            <div className="py-10 mx-auto w-full">
              <button className="flex justify-center items-center p-3 mx-auto w-52 font-semibold tracking-wider text-white bg-gray-800 rounded-md hover:opacity-80 duration-500">
                <BsGithub className="mr-1"/>
                Github でログイン
              </button>
              <button className="flex justify-center items-center p-3 mx-auto mt-6 w-52 font-semibold tracking-wider text-fuchsia-600 hover:text-white bg-white hover:bg-fuchsia-600 rounded-md border-2 border-fuchsia-600 duration-500">
                <MdOutlineDeviceUnknown className="mr-1"/>
                匿名で参加する
              </button>
            </div>
          </div>
          <Image className="inline-block" src="/home-hero.svg" alt="ヒーロー画像" width={800} height={800}/>
        </div>
        {/* <p>{user}</p> */}
      </AppContainer>
    </div>
  )
}