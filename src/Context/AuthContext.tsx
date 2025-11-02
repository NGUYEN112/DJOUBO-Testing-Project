import { createContext, useContext, useEffect, useState } from "react";

type User = { 
    id: number; 
    username: string; 
};

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  bootstrapped:boolean
  login: (u: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bootstrapped, setBootstrapped] = useState(false);

  // loadpage: recover session from sessionStorage
  useEffect(() => {
    const raw = sessionStorage.getItem("userSession");
    if (raw) {
      try { 
        setUser(JSON.parse(raw));
      } catch { 
        sessionStorage.removeItem("userSession");
      }
    }
    setBootstrapped(true)
  }, []);

  // login -> save session
  const login = (u: User) => {
    sessionStorage.setItem("userSession", JSON.stringify(u));
    setUser(u);
  };

  // logout -> delete session
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("userSession");
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn,bootstrapped }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}