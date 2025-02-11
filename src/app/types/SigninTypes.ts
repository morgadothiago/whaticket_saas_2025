export interface SignInFormData {
  email: string;
  password: string;
}

export interface SigninTypes {
  id?: number;
  fullName?: string;
  email: string;
  password?: string;  // Make password optional since we don't want to store it after login
  role?: string;  // Make role optional since it's not part of the form
}