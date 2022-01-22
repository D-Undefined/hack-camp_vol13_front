import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const userSelector = (state: RootState) => state.user

// ユーザー一覧を取得するselector
// export const userInfoSelector = createSelector(userSelector, (user) => {
//   return user
// })
