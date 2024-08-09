import useAuthStore from "@/app/stores/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import axios from "axios";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/user`;

const useGoogleAuth = () => {

  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const loginUser = useAuthStore(state => state.login);

  const handleGoogleAuth = async () => {

    try {
      const newUser = await signInWithGoogle();

      if (!newUser && error) {
        throw new Error(`Error ${error.message}`);
      }

      let existsUser = true;
      const token = await newUser?.user.getIdToken();
      setCookie("authToken", `${token}`, 1);

      await axios.get(`${BASE_URL}/${newUser?.user.uid}`)
        .then(response => {
          localStorage.setItem("user-info", JSON.stringify(response.data.user));
          loginUser(response.data.user);
          existsUser = true;
        })
        .catch(err => {
          existsUser = false;
          console.log(err.message)
        });

      if (!existsUser) {
        // Signup
        const userDoc = {
          firebaseId: newUser?.user.uid,
          email: newUser?.user.email,
          name: newUser?.user.displayName
        }

        await axios.post(`${BASE_URL}`, userDoc)
          .then(response => {
            if (response.status === 201 && response.data.userId) {
              localStorage.setItem("user-info", JSON.stringify(userDoc))
              loginUser(userDoc)
            }
          })
      }

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }
  }

  return { handleGoogleAuth }
}

export default useGoogleAuth