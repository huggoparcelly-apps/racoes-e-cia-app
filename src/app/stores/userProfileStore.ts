import { create } from "zustand";
import { User } from "../types/User";

interface UserProfileState {
  userProfile: User | null;
  setUserProfile: (userProfile: User | null) => void;
}

const useUserProfileStore = create<UserProfileState>((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
}));

export default useUserProfileStore;