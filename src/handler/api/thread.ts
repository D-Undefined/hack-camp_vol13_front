import { IThread } from "@/domain/thred"
import { IThreadParams } from "@/interface/handler/api/thread"
import { axiosClient } from "./client"

export const ThreadAPI = {
  // スレッド一覧を取得
  getAllThreads: async (): Promise<IThread[]> => {
    const {data} = await axiosClient().get("/threads")
    return data
  },
  // スレッドを作成
  postThread: async (params: IThreadParams): Promise<IThread> => {
    const {data} = await axiosClient().post("/thread", params)
    return data
  }
}