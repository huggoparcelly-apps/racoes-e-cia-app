import { create } from "zustand";
import { User } from "../types/User";

interface AuthState {
  user: User | null;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
  userToken: String | null;
  setUserToken: (userToken: String | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user-info") || 'null') : null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
  userToken: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user-token") || 'null') : null,
  setUserToken: (userToken) => set({ userToken })
}));

export default useAuthStore;
