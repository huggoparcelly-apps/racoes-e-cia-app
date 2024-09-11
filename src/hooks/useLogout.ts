import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import { useRouter } from "next/navigation";
import { useSignOut } from "react-firebase-hooks/auth";

const useLogout = () => {
  const [signOut, isLogginOut, error] = useSignOut(auth);
  const logoutUser = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      logoutUser();
      router.refresh();
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }
  };

  return { handleLogout, isLogginOut, error };
};

export default useLogout;
