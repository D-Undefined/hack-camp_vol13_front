
import { IThread } from "@/domain/thred"
import { IParamCreateThread, IParamGetThreadByID } from "@/interface/handler/api/thread"
import { axiosClient } from "./client"

export const TrendThreadAPI = {
  // 過去１週間の trendのthreadを 10件返す
  getTrendThreads: async (): Promise<IThread[]> => {
    const {data} = await axiosClient().get("/threads/trend")
    return data
  },
}