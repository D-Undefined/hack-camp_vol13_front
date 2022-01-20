import { firebaseClient } from '@/handler/firebase/client'
import { ICredential, IGithubUserDTO } from '@/interface/handler/firebase/auth'
import { FirebaseApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, UserInfo } from 'firebase/auth'


export default class FirebaseAuth {
  private readonly _fbApp: FirebaseApp

  constructor() {
    this._fbApp = firebaseClient()
  }

  // github への Login処理
  async githubLogin() {
    const AuthProvider = new GithubAuthProvider()
    const auth = getAuth(this._fbApp)

    // FB でサインインの処理 
    const res = await signInWithPopup(auth, AuthProvider)
    const credential: ICredential | null = GithubAuthProvider.credentialFromResult(res)
    if (credential) {
      const githubUser: UserInfo = res.user

      const githubUserDTO: IGithubUserDTO = {
        uid: githubUser.uid,
        displayName: githubUser.displayName || "",
        email: githubUser.email || "",
        photoURL: githubUser.photoURL || ""
      }

      // TODO ここに ユーザーを DB に保存
      return githubUserDTO
    }
    return null

  }

}