import { create } from "zustand";
import { User } from "../types/User";

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
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
  userToken: typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem("user-token") || 'null') : null,
  setUserToken: (userToken) => sessionStorage.setItem("user-token", JSON.stringify(userToken))
}));

export default useAuthStore;
