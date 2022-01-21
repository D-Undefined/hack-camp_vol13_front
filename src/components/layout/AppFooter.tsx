import { FC } from "react"
import { AppContainer } from "./AppContainer"

export const AppFooter: FC = () => {
  return (
    <div className="py-12 text-xl text-center text-white bg-gray-800">
      <AppContainer>
        <p>Developers</p>
        <div className="mt-12 space-y-3 text-lg">
          <p>Sino・Server</p>
          <p>かずやん・webFront</p>
          <p>Kouta Fd・webFront</p>
        </div>
      </AppContainer>
      
    </div>
  )
}