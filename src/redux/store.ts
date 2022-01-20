import {configureStore} from "@reduxjs/toolkit"
import userReducer from "@/redux/slices/user"

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})