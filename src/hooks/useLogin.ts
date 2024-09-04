import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import axios from "axios";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useLogin = () => {

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore(state => state.login);
  const setToken = useAuthStore((state) => state.setUserToken);
  
  interface LoginInputs {
    email: string;
    password: string;
  }

  const login = async (inputs: LoginInputs) => {

    if (!inputs.email || !inputs.password) {
      throw new Error("Please fill all the fields");
    }

    try {

      const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

      if (!userCred && error) {
        throw new Error(`Error ${error.message}`);
      }
      if (userCred) {
        const token = await userCred.user.getIdToken();
        setCookie("authToken", `${token}`, 1);
        setToken(token);

        await axios.get(`${BASE_URL}/${userCred.user.uid}`)
          .then(response => {
            sessionStorage.setItem("user-token", JSON.stringify(token));
            loginUser(response.data)
          });
      }

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }

  }

  return { loading, error, login }
}

export default useLogin