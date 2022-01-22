import { IComment } from "./comment"

export interface IThread {
  id: number,
  name: string,
  vote_cnt: number,
  Vote: null,
  uid: string,
  created_at: string,
  comment_cnt: number,
  Comments: IComment[]
}