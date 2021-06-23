export interface IUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  login: string;
  html_url: string;
}

export interface IUserState {
  user: IUser ;
}
