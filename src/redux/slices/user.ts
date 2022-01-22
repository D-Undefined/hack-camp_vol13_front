import { IUser } from "@/domain/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initUserState: IUser = {
  uid: "",
  user_name: "",
  github: "",
  image_url: "",
  bio: "",
  follow: 0,
  follower: 0,
  belong: "",
  threads: []
}

const saveToLocalStorage = (data: Object) => {
  localStorage.setItem("userInfo", JSON.stringify(data))
}

const userSlice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      Object.assign(state, {...action.payload})
      saveToLocalStorage(state)
    },
  }
})


// ユーザー情報をストレージから読み取る
export const loadUserFromStorage = () => {
  if(localStorage) {
    const savedUser = localStorage.getItem("userInfo")
    if (savedUser) {
      return JSON.parse(savedUser)
    }
  }
  return null
}


export const {login} = userSlice.actions
export default userSlice.reducer
