export interface IPostCommentVoteParams {
  comment_id: number,
  uid: string,
  is_up: boolean
}

export interface IPostCommentVoteRes {
  message: string
}

export interface IPostThreadVoteParams {
  thread_id: number,
  uid: string,
  is_up: boolean
}

export interface IPostThreadVoteRes {
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

export interface IGetThreadVoterUserParams {
  uid: string,
  thread_id: number
}
export interface IGetThreadVoterUserRes {
  id: number,
  uid: string,
  thread_id: number,
  is_up:boolean
}

