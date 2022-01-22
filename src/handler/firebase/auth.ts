import { firebaseClient } from '@/handler/firebase/client'
import { FirebaseAuthImpl, ICredential, IGithubUserDTO } from '@/interface/handler/firebase/auth'
import { FirebaseApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, UserInfo } from 'firebase/auth'
import { UsersAPI } from '../api/user'


export default class FirebaseAuth implements FirebaseAuthImpl{
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
        github: githubUser.displayName || "",
        user_name: githubUser.displayName || "",
        image_url: githubUser.photoURL || ""
      }
      
      return await UsersAPI.postLogin(githubUserDTO)

    }
    return null

  }

}