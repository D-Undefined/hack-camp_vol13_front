export interface ICredential {
  accessToken?: string
}

export interface IGithubUserDTO {
  uid: string,
  displayName: string,
  email: string,
  photoURL: string,
}