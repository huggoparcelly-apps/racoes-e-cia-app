import { create } from "zustand";

interface AuthState {
  user: any | null;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user-info") || 'null') : null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user })
}));

export default useAuthStore;
