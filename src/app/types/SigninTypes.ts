import type { User } from "./User";

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SigninTypes {
  user: User;
  token: string;
  // Make role optional since it's not part of the form
}