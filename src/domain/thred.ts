import { IComment } from "./comment"

export interface IThread {
  id: number,
  name: string,
  vote_cnt: number,
  vote: null,
  user_id: string,
  created_at: string,
  comment_cnt: number,
  comments: IComment[]
}