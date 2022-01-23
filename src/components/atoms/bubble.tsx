// import Image from "next/image"
import { FC, useEffect } from "react"

interface IProps {
  className?: string
}

export const Bubble: FC<IProps> = ({ className }) => {
  useEffect(() => {
    var img_array = [
      "https://placehold.jp/50x50.png",
      "https://placehold.jp/50x50.png",
      "https://placehold.jp/50x50.png",
      "https://placehold.jp/50x50.png",
      "https://placehold.jp/50x50.png",
      "https://placehold.jp/50x50.png",
    ]
    if (typeof document !== 'undefined') {
      //配列分のプロフアイコンの表示
      const element: HTMLInputElement = (document.getElementById("img-wrap") as HTMLInputElement)
      for (let i = 0; i < img_array.length; i++) {
        if (element != undefined) {
          const new_element: HTMLInputElement = (document.createElement("img") as unknown as HTMLInputElement)
          const icon_size = 100 * Math.random()
          if (icon_size < 20) {
            new_element.width = 50
            new_element.height = 50
          } else {
            new_element.width = icon_size
            new_element.height = icon_size
          }
          new_element.src = img_array[i]
          new_element.classList.add("fuwafuwa")
          //初期位置の指定
          const startX = 50 * Math.random()
          const startY = 70 * Math.random()
          //動きのバリエーション
          if (i % 2 == 0) {
            new_element.style.animationName = "fuwafuwa1"
          } else {
            new_element.style.animationName = "fuwafuwa2"
          }
          new_element.style.top = startX + "%"
          new_element.style.left = startY + "%"
          //出力
          element.appendChild(new_element)
        }
      }
    }
  }, [])
  return (
    <div id="img-wrap"></div>
  )
}
