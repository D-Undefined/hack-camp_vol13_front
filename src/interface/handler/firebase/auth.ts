export interface ICredential {
  accessToken?: string
}

export interface IGithubUserDTO {
  uid: string,
  user_name: string,
  github: string,
  image_url: string,
}

export interface FirebaseAuthImpl {
  githubLogin(): Promise<IGithubUserDTO | null>
}