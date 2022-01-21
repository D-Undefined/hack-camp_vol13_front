import { AppContainer } from "@/components/layout/AppContainer"
import { FC } from "react"

export const SecBio: FC = () => {
  return (
    <div>
      <AppContainer>
        <div className="rounded border border-gray-200">
          <div className="py-2 px-5 bg-purple-100">
            <h4 className="text-gray-600">Bio</h4>
          </div>
          <p className="p-5">自己紹介 Lorem ipsum dolor sit amet.</p>
        </div>
      </AppContainer>
    </div>
  )
}