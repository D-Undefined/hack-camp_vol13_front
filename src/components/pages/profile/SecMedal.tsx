import { AppContainer } from "@/components/layout/AppContainer"
import { FC } from "react"
import { FaMedal } from "react-icons/fa"

export const SecMedal: FC = () => {
  return (
    <div>
      <AppContainer>
        <div className="grid grid-cols-2 col-span-2 gap-6">
          <div className="rounded border border-gray-200">
            <div className="py-2 px-5 bg-purple-100">
              <h4 className="text-gray-600">Thread Master</h4>
            </div>
            <div className="flex justify-center items-center h-12 border-b border-gray-200">
              Unranked
            </div>
            <div className="grid grid-cols-3 items-center divide-x divide-gray-200">
              <span className="py-2 space-y-1 text-yellow-600 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
              <span className="py-2 space-y-1 text-zinc-400 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
              <span className="py-2 space-y-1 text-amber-700 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
            </div>
          </div>
          <div className="rounded border border-gray-200">
            <div className="py-2 px-5 bg-purple-100">
              <h4 className="text-gray-600">Discussion Master</h4>
            </div>
            <div className="flex justify-center items-center h-12 border-b border-gray-200">
              Unranked
            </div>
            <div className="grid grid-cols-3 items-center divide-x divide-gray-200">
              <span className="py-2 space-y-1 text-yellow-600 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
              <span className="py-2 space-y-1 text-zinc-400 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
              <span className="py-2 space-y-1 text-amber-700 bg-gray-50">
                <FaMedal className="mx-auto text-3xl"/>
                <p className="text-xl font-bold text-center">10</p>
              </span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}