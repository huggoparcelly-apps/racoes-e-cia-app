import useAuthStore from "@/app/utils/authStore";
import { auth } from "@/services/firebase/firebaseConfig";
import setCookie from "@/services/helpers/setCookie";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

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

      // await axios.get(`${BASE_URL}/users_id/${newUser.user.uid}`)
      //   .then(response => {
      //     localStorage.setItem("user-info", JSON.stringify(response.data.user));
      //     loginUser(response.data.user);
      //     existsUser = true;
      //   })
      //   .catch(err => {
      //     existsUser = false;
      //     console.log(err.message)
      //   });

      if (!existsUser) {
        // Signup
        const userDoc = {
          uid: newUser?.user.uid,
          email: newUser?.user.email,
          username: newUser?.user.email?.split("@")[0],
          fullName: newUser?.user.displayName,
          profilePicURL: newUser?.user.photoURL
        }
        localStorage.setItem("user-info", JSON.stringify(userDoc))

        // await axios.post(`${BASE_URL}/users`, userDoc)
        //   .then(response => {
        //     if (response.status === 201 && response.data) {
        //       localStorage.setItem("user-info", JSON.stringify(userDoc))
        //       loginUser(userDoc)
        //     }
        //   })
      }

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    }
  }

  return { handleGoogleAuth }
}

export default useGoogleAuth