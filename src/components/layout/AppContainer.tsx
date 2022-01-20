import { FC } from "react"

export const AppContainer: FC = ({children}) => {
  return (
    <div className="py-12 mx-auto max-w-screen-md">
      {children}
    </div>
  )
}