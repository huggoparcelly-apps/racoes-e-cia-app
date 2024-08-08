import useSignUpWithEmailAndPassword from "@/hooks/useSignUpWithEmailAndPassword";
import { useState } from "react";

interface Inputs {
  email: string;
  fullName: string;
  password: string;
}

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const{loading, error, signup} = useSignUpWithEmailAndPassword();
  const [inputs, setInputs] = useState<Inputs>({ email: '', fullName: '', password: '' });

  return (
    <div>
      <input
        placeholder='Email'
        className="border border-gray-300 rounded-md p-2 text-sm"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <input
        placeholder='Full Name'
        className="border border-gray-300 rounded-md p-2 text-sm mt-2"
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />

      <div className="relative mt-2">
        <input
          placeholder='Password'
          className="border border-gray-300 rounded-md p-2 text-sm w-full"
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="button"
            className="text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 0 12 0s10 4.477 10 10c0 1.248-.228 2.44-.637 3.552M15 12l-6 6M9 6l6 6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 0 12 0s10 4.477 10 10c0 1.248-.228 2.44-.637 3.552M15 12l-6 6M9 6l6 6" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        className="w-full text-white bg-black mt-4 p-2 text-sm rounded-md"
        onClick={() => signup(inputs)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
    </div>
  )
}

export default SignUp