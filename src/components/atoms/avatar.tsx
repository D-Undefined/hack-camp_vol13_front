import Image from "next/image"
import { FC } from "react"

export const Avatar: FC = () => {
  return (
    <Image className="rounded-full" width={40} height={40} src="https://placehold.jp/100x100.png" alt="icon"/>
  )
}