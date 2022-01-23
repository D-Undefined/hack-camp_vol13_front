import { IUser } from "@/domain/user"
import { IParamCreateThread, IParamGetThreadByID } from "@/interface/handler/api/thread"
import { axiosClient } from "./client"

export const RankingAPI = {
  // ユーザーのランキング(top10)を取得
  getUserRanking: async (): Promise<IUser[]> => {
    const {data} = await axiosClient().get("/users/ranking")
    return data
  },
}