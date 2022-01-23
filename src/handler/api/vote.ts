import { IGetThreadVoteParams, IGetThreadVoteRes, IPostCommentVoteParams, IPostCommentVoteRes } from "@/interface/handler/api/vote"
import { axiosClient } from "./client"

export const VoteAPI = {
  //コメント投票の API
  postVoteComment: async (params: IPostCommentVoteParams): Promise<IPostCommentVoteRes> => {
    const {data} = await axiosClient().post("/vote_comment", params)
    return data
  },
  //スレッドの投票コメント一覧取得
  getThreadComment: async (params: IGetThreadVoteParams): Promise<IGetThreadVoteRes[]> => {
    const {data} = await axiosClient().get(`/vote_comment/${params.uid}/${params.thread_id}`)
    return data
  }
}