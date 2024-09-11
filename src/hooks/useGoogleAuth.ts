import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import axios from "axios";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { User } from "@/app/types/User";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useGoogleAuth = () => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const loginUser = useAuthStore((state) => state.login);
  const setToken = useAuthStore((state) => state.setUserToken);

  const showToast = useShowToast();

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();

      if (!newUser && error) {
        return showToast("Error", error.message, "error");
      }

      let existsUser = false;
      if (newUser) {
        const token = await newUser.user.getIdToken();
        setToken(token);

        await axios
          .get(`${BASE_URL}/${newUser.user.uid}`)
          .then((response) => {
            const userResponse: User = {
              id: response.data.id,
              name: response.data.name,
              firebaseId: response.data.firebaseId
            }
            
            loginUser(userResponse)
            existsUser = true;
          })
          .catch((err) => {
            existsUser = false;
            console.log(err.message);
          });
      }

      if (!existsUser) {
        // Signup
        const userDoc = {
          firebaseId: newUser?.user.uid,
          email: newUser?.user.email,
          name: newUser?.user.displayName,
        };

        await axios.post(`${BASE_URL}`, userDoc).then((response) => {
          if (response.status === 201 && response.data.firebaseId) {
            const userResponse: User = {
              id: response.data.id,
              name: response.data.name,
              firebaseId: response.data.firebaseId
            }
            
            loginUser(userResponse)
          }
        });
      }
    } catch (error: any) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleGoogleAuth };
};

export default useGoogleAuth;
