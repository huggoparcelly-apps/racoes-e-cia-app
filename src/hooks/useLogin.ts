import useAuthStore from "@/app/utils/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const useLogin = () => {

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore(state => state.login);
  
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
        // requisição no backend para trazer as infos do usuário e setar no localStotarage
        // await axios.get(`${BASE_URL}/users_id/${userCred.user.uid}`)
        //   .then(response => {
        //     localStorage.setItem("user-info", JSON.stringify(response.data.user));
        //     loginUser(response.data.user)
        //   });
      }

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }

  }

  return { loading, error, login }
}

export default useLogin