import useAuthStore from "@/app/utils/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

interface Inputs {
  email: string;
  fullName: string;
  password: string;
}

const useSignUpWithEmailAndPassword = () => {

  const [
    createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);

  
  const loginUser = useAuthStore(state => state.login);

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
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          fullName: inputs.fullName,
        }
        
        // await axios.post(`${BASE_URL}/users`, userDoc)
        //   .then(response => {
        //     if (response.status === 201 && response.data.userId) {
        //       localStorage.setItem("user-info", JSON.stringify(userDoc))
        //       loginUser(userDoc)
        //     }
        //   })
      }
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);

    }
  }

  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword