import { IUser } from "@/domain/user"
import { ILoginParams } from "@/interface/handler/api/user"
import { axiosClient } from "./client"

export const UsersAPI = {
  postLogin: async (params: ILoginParams): Promise<IUser> => {
    const {data} = await axiosClient().post("/user", params)
    return data
  }
}