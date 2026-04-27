/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import { User, Order } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  addOrder: (order: Order) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('vc_auth_identity');
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Identity restoration protocol failed:', error);
      return null;
    }
  });

  const login = async (email: string, pass: string) => {
    // Mock login
    const userData: User = {
      id: 'u1',
      name: 'John Doe',
      email: email,
      address: '123 Fashion Ave, NY',
      orders: [],
      isAdmin: email === 'isifat733@gmail.com'
    };
    
    try {
      localStorage.setItem('vc_auth_identity', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Identity synchronization failed:', error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('vc_auth_identity');
      setUser(null);
    } catch (error) {
      console.error('Protocol termination failed:', error);
      setUser(null);
    }
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    try {
      localStorage.setItem('vc_auth_identity', JSON.stringify(updated));
      setUser(updated);
    } catch (error) {
      console.error('Profile tactical sync failed:', error);
    }
  };

  const addOrder = (order: Order) => {
    if (!user) return;
    const updated = { ...user, orders: [order, ...user.orders] };
    try {
      localStorage.setItem('vc_auth_identity', JSON.stringify(updated));
      setUser(updated);
    } catch (error) {
       console.error('Order archive sync failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
