export interface LoginData {
  status: number;
  data: UserData;
  count: number;
  message: string;
}

export interface UserData {
  id_token: string
}
