export type UserType = {
    account: string,
    password: string
}

export interface UserLoginResponse {
    user: {
      account: string;
      password: string,
    };
    token: string;
  }