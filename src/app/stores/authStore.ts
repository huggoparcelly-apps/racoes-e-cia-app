import { create } from "zustand";
import { User } from "../types/User";
import setCookie from "@/services/helpers/setCookie";

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
  userToken: string | null;
  setUserToken: (userToken: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user-info") || 'null') : null,
  login: (user) => {
    localStorage.setItem('user-info', JSON.stringify(user))
    set({ user });
  },
  logout: () => {
    setCookie("authToken", null, 1);
    sessionStorage.removeItem("user-token");
    localStorage.removeItem('user-info');
    set({ userToken: null });
  },
  setUser: (user) => set({ user }),
  userToken: typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem("user-token") || 'null') : null,
  setUserToken: (userToken) => {
    setCookie("authToken", `${userToken}`, 1);
    sessionStorage.setItem("user-token", JSON.stringify(userToken));
    set({ userToken });
  }
}));

export default useAuthStore;
