export interface IPostCommentVoteParams {
  comment_id: number,
  uid: string,
  is_up: boolean
}

export interface IPostCommentVoteRes {
  message: string
}

export interface IGetThreadVoteParams {
  uid: string,
  thread_id: number
}
export interface IGetThreadVoteRes {
  uid: string,
  comment_id: number,
  id: number,
  is_up: boolean
}

