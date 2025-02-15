'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SignInFormData, SigninTypes } from '@/app/types/SigninTypes';
import api from '../services/api';
import type { User } from '../types/User';
import type { AuthContextType } from '../types/AuthContextType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (data: SignInFormData): Promise<SigninTypes | null> => {
    try {
      const response = await api.login(data.email, data.senha);

      console.log("campos enviados -> ", data.email)
      console.log("campos enviados -> ", data.senha)

      if ('message' in response) {
        console.log("Aqui esta o ->", response.message)
        return null;
      }

      if (response) {
        saveUser(response.user);
        saveToken(response.token);
        setUser(response.user);

        return response;
      }
      return null;
    } catch (error) {
      console.log(error)
      return null;
    }
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);

  }

  const saveUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);

  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));

    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
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
