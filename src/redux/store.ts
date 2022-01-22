import userReducer from "@/redux/slices/user"
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
  reducer: {
    user: userReducer
  },
})
