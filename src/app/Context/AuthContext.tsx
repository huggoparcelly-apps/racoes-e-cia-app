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
import { UserType } from "../types/UserType";

interface AuthContextProps {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType>>;
}

const defaultUser: UserType = {
    id: 0,
    name: '',
    fone: '',
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
  const [user, setUser] = useState<UserType>(defaultUser);

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

// export const useAuth = (): AuthContextProps => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export const useAuthContext = () => useContext(AuthContext);

const fakeAuthApi = async (): Promise<UserType> => {
  return {
    id: 1,
    name: "Admin User",
    fone: "123",
    role: "admin", // ou 'user'
  };
};
