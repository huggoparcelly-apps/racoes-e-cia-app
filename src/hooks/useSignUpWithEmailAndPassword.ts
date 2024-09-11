import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import axios from "axios";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { User } from "@/app/types/User";

interface Inputs {
  email: string;
  fullName: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const loginUser = useAuthStore((state) => state.login);
  const setToken = useAuthStore((state) => state.setUserToken);
  const showToast = useShowToast();

  const signup = async (inputs: Inputs) => {
    if (!inputs.email || !inputs.password || !inputs.fullName) {
      return showToast("Error", "Please fill all the fields", "error");
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        return showToast("Error", error.message, "error");
      }

      if (newUser) {
        const token = await newUser.user.getIdToken();
        setToken(token);

        const userDoc = {
          firebaseId: newUser.user.uid,
          email: inputs.email,
          name: inputs.fullName,
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

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
