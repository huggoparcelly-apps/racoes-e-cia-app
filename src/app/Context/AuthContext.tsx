"use client";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { User } from "../types/User";

interface AuthContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultUser: User = {
    id: 0,
    name: '',
    phone: '',
    role: ''
};

const AuthContext = createContext<AuthContextProps>({
  user: defaultUser,
  setUser: () => defaultUser,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fakeAuthApi();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const fakeAuthApi = async (): Promise<User> => {
  return {
    id: 1,
    name: "Admin User",
    phone: "123",
    role: "admin", // ou 'user'
  };
};
