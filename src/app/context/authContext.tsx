'use client'

import React, { createContext, useContext, useState } from 'react';
import type { SigninTypes } from '@/app/types/SigninTypes';
import { mockUsers } from '../mock/user';

interface AuthContextType {
  user: SigninTypes | null;
  login: (data: SigninTypes) => Promise<SigninTypes | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SigninTypes | null>(null);

  const login = async (data: SigninTypes): Promise<SigninTypes | null> => {
    const foundUser = mockUsers.find(user => user.email === data.email && user.password === data.password);
    if (foundUser) {
      const userInfo = {
        id: foundUser.id,
        fullName: foundUser.fullName,
        email: foundUser.email,
        role: foundUser.role,
        user: foundUser.user,
        status: foundUser.role === 'admin' ? foundUser.status : undefined,
      };
      setUser(userInfo);
      console.log('Login successful:', userInfo);
      return userInfo;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
