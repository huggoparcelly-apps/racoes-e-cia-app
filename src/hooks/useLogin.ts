import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import axios from "axios";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { User } from "@/app/types/User";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useLogin = () => {

  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore(state => state.login);
  const setToken = useAuthStore((state) => state.setUserToken);
  
  interface LoginInputs {
    email: string;
    password: string;
  }

  const login = async (inputs: LoginInputs) => {

    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill all the fields", "error");
    }

    try {

      const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

      if (!userCred && error) {
        return showToast("Error", error.message, "error");
      }
      if (userCred) {
        const token = await userCred.user.getIdToken();
        setToken(token);

        await axios.get(`${BASE_URL}/${userCred.user.uid}`)
          .then(response => {
            const userResponse: User = {
              id: response.data.id,
              name: response.data.name,
              firebaseId: response.data.firebaseId
            }
            
            loginUser(userResponse)
          });
      }

    } catch (error: any) {
      showToast("Error", error.message, "error");
    }

  }

  return { loading, error, login }
}

export default useLogin