'use client'

import React, { createContext, useContext, useState } from 'react';
import type { SigninTypes } from '@/app/types/SigninTypes';

interface AuthContextType {
  user: SigninTypes | null;
  login: (data: SigninTypes) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SigninTypes | null>(null);

  const login = async (data: SigninTypes): Promise<boolean> => {
    const mockedUsers = [
      {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin',
      },
      {
        email: 'user@example.com',
        password: 'user123',
        role: 'user',
      },
    ];

    const foundUser = mockedUsers.find(user => user.email === data.email && user.password === data.password);
    if (foundUser) {
      setUser(foundUser);
      console.log('Login successful:', foundUser);
      return true;
    } else {
      console.warn('Login failed: Invalid email or password');
      return false;
    }
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
