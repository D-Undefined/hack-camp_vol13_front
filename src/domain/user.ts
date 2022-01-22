import { IThread } from "./thred"

// TODO　メダル情報などを追加
export interface IUser {
  uid: string,
  user_name: string,
  github: string,
  image_url: string,
  bio: string,
  follow: number,
  follower: number,
  belong: string,
  threads: IThread[] | null
}