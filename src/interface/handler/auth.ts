export interface ICredential {
  accessToken?: string
}

export interface IGithubUser {
  uid: string,
  displayName: string,
  email: string,
  photoURL: string,
}