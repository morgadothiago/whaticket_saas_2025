import type { User } from './User';
import type { SignInFormData, SigninTypes } from './SigninTypes';

export interface AuthContextType {
  user: User | null;
  login: (data: SignInFormData) => Promise<SigninTypes | null>;
  logout: () => void;
}