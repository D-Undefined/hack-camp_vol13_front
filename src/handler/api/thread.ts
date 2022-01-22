import { IThread } from "@/domain/thred"
import { axiosClient } from "./client"

export const ThreadAPI = {
  getThreads: async (): Promise<IThread[]> => {
    const {data} = await axiosClient().get("/threads")
    return data
  }
}