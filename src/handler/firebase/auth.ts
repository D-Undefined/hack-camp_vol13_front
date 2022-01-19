import { ICredential } from '@/interface/handler/auth'
import { FirebaseApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, UserInfo } from 'firebase/auth'

export default class FirebaseAuth {
  private readonly _fbApp: FirebaseApp

  constructor(app: FirebaseApp) {
    this._fbApp = app
  }

  // github への Login処理
  async githubLogin() {
    const AuthProvider = new GithubAuthProvider()
    const auth = getAuth(this._fbApp)

    // サインインの処理 
    const res = await signInWithPopup(auth, AuthProvider)
    const credential: ICredential | null = GithubAuthProvider.credentialFromResult(res)
    if (credential) {
      const token = credential.accessToken
      const user: UserInfo = res.user

      console.log(token, user)
    }
  }

}