import useAuthStore from "@/app/stores/authStore";
import useUserProfileStore from "@/app/stores/userProfileStore";
import { auth } from "@/services/firebase/firebaseConfig";
import { useSignOut } from "react-firebase-hooks/auth";

const useLogout = () => {
  const [signOut, isLogginOut, error] = useSignOut(auth);
  const logoutUser = useAuthStore((state) => state.logout);
  const setToken = useUserProfileStore((state) => state.setUserToken);

  const handleLogout = async () => {
    try {
      await signOut();
      setToken(null);
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }
  };

  return { handleLogout, isLogginOut, error };
};

export default useLogout;
