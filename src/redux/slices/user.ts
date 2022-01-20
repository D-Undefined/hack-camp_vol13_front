import { IUser } from "@/domain/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initUserState: IUser = {
  uid: "",
  displayName: "",
  email: "",
  photoURL: ""
}

const userSlice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      Object.assign(state, {...action.payload})
    },
  }
})


export const {login} = userSlice.actions
export default userSlice.reducer
