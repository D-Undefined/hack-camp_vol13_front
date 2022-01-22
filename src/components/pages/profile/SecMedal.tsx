import { AppContainer } from "@/components/layout/AppContainer"
import { FC } from "react"
import { FaMedal } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"

export const SecMedal: FC = () => {
  return (
    <div>
      <AppContainer>
        <div className="w-4/5 mx-auto">
          <div className="rounded border border-gray-200 w-full">
            <div className="flex items-center py-2 px-5 bg-gray-100">
              <h4 className="text-gray-600">Master</h4>
            </div>
            <div className="flex justify-center items-center h-12 border-b border-gray-200">
              Unranked
            </div>
            <div className="grid grid-cols-2 items-center divide-x divide-gray-200">
              <span className="py-2 space-y-1 text-yellow-600 bg-gray-50">
                <GiDiamondTrophy className="mx-auto text-5xl text-yellow-500" />
              </span>
              <span className="py-2 space-y-1 text-zinc-400 bg-gray-50">
                <GiDiamondTrophy className="mx-auto text-5xl text-gray-300" />
              </span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}
