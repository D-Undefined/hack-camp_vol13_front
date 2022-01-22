import { IComment } from "@/domain/comment"
import { IPostCommentParams } from "@/interface/handler/api/comment"
import { axiosClient } from "./client"

export const CommentAPI = {
  // コメントの作成
  postComment: async (params: IPostCommentParams): Promise<IComment> => {
    const {data} = await axiosClient().post("/comment", params)
    return data
  }
}