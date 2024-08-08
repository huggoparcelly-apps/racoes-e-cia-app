import useAuthStore from "@/app/utils/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import { useSignOut } from "react-firebase-hooks/auth";


const useLogout = () => {

  const [signOut, isLogginOut, error] = useSignOut(auth);

  
  const logoutUser = useAuthStore(state => state.logout);


  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info")
      logoutUser();
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }

  }

  return { handleLogout, isLogginOut, error }
}

export default useLogout