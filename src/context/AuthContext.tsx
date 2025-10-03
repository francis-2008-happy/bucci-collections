import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (newUser: User) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // load user from localStorage if already logged in
    const saved = localStorage.getItem("loggedInUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Login function
  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u: User) => u.email === email && u.password === password
    );
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // Register
  const register = (newUser: User): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: User) => u.email === newUser.email)) {
      return false; // email already exists
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
