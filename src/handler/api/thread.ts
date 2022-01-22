import { IThread } from "@/domain/thred"
import { IParamCreateThread, IParamGetThreadByID } from "@/interface/handler/api/thread"
import { axiosClient } from "./client"

export const ThreadAPI = {
  // スレッド一覧を取得
  getAllThreads: async (): Promise<IThread[]> => {
    const {data} = await axiosClient().get("/threads")
    return data
  },
  // スレッドを id で取得
  getThreadByID: async (params: IParamGetThreadByID): Promise<IThread> => {
    const {data} = await axiosClient().get(`/thread/${params.id}`)
    return data
  },
  // スレッドを作成
  postThread: async (params: IParamCreateThread): Promise<IThread> => {
    const {data} = await axiosClient().post("/thread", params)
    return data
  }
}