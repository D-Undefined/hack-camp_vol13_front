import { FC } from "react"

export const AppContainer: FC = ({children}) => {
  return (
    <div className="mx-auto max-w-screen-lg">
      {children}
    </div>
  )
}