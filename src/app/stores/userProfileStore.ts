import { create } from "zustand";
import { User } from "../types/User";

interface UserProfileState {
  userProfile: User | null;
  setUserProfile: (userProfile: User | null) => void;
  userToken: String | null;
  setUserToken: (userToken: String | null) => void;
}

const useUserProfileStore = create<UserProfileState>((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  userToken: null,
  setUserToken: (userToken) => set({ userToken })
}));

export default useUserProfileStore;