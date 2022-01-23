import { IGetThreadVoteParams, IGetThreadVoteRes, IGetThreadVoterUserParams, IGetThreadVoterUserRes, IPostCommentVoteParams, IPostCommentVoteRes, IPostThreadVoteParams, IPostThreadVoteRes } from "@/interface/handler/api/vote"
import { axiosClient } from "./client"

export const VoteAPI = {
  //コメント投票の API
  postVoteComment: async (params: IPostCommentVoteParams): Promise<IPostCommentVoteRes> => {
    const {data} = await axiosClient().post("/vote_comment", params)
    return data
  },
  //スレッド投票の API
  postVoteThread: async (params: IPostThreadVoteParams): Promise<IPostThreadVoteRes> => {
    const {data} = await axiosClient().post("/vote_thread", params)
    return data
  },
  //スレッドの投票コメント一覧取得
  getThreadComment: async (params: IGetThreadVoteParams): Promise<IGetThreadVoteRes[]> => {
    const {data} = await axiosClient().get(`/vote_comment/${params.uid}/${params.thread_id}`)
    return data
  },
  //スレッドの投票コメント一覧取得
  getThreadVoterUser: async (params: IGetThreadVoterUserParams): Promise<IGetThreadVoterUserRes> => {
    const {data} = await axiosClient().get(`/vote_thread/${params.uid}/${params.thread_id}`)
    return data
  }
}