import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import axios from "axios";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

interface Inputs {
  email: string;
  fullName: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useSignUpWithEmailAndPassword = () => {

  const [
    createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);

  
  const loginUser = useAuthStore(state => state.login);
  const setToken = useAuthStore((state) => state.setUserToken);

  const signup = async (inputs: Inputs) => {
    if (!inputs.email || !inputs.password || !inputs.fullName) {
      throw new Error("Please fill all the fields");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

      if (!newUser && error) {
        throw new Error(`Error ${error.message}`);
      }

      if (newUser) {
        const token = await newUser.user.getIdToken();
        setToken(token);
        setCookie("authToken", `${token}`, 1);
        
        const userDoc = {
          firebaseId: newUser.user.uid,
          email: inputs.email,
          name: inputs.fullName,
        }
        
        await axios.post(`${BASE_URL}`, userDoc)
          .then(response => {
            if (response.status === 201 && response.data.firebaseId) {
              localStorage.setItem("user-info", JSON.stringify(response.data))
              loginUser(response.data)
            }
          })
      }
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);

    }
  }

  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword