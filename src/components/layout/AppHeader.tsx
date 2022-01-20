import { FC } from "react"
import { AppContainer } from "./AppContainer"

export const AppHeader: FC = () => {
  return (
    <section className="h-12 text-white bg-gray-800">
      <AppContainer>
        <div className="flex items-center h-full">
          <h2>Engineer Board (仮名)</h2>
        </div>
      </AppContainer>
    </section>
  )
}