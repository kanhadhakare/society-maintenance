export interface LoginData {
  status: number;
  data: UserData;
  count: number;
  message: string;
}

export interface UserData {
  id_token: string
}

export interface UserAccountDetails {
  status: number;
  data: UserAccountData;
  count: number | null;
  message: string | null;
}

export interface UserAccountData {
  id: number;
  name: string;
  login: string;
  module: authLevel;
  profile: any
}

type authLevel = 'admin' | 'societyAdmin' | 'user';
