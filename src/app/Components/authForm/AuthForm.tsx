'use client';

import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="mt-5">
      <div className="space-y-5">
        {isLogin ? <Login /> : <SignUp />}

        <div className="flex items-center justify-center my-4 gap-1 w-full">
          <div className="flex-2 h-px bg-gray-400"></div>
          <span className="mx-1">OR</span>
          <div className="flex-2 h-px bg-gray-400"></div>
        </div>

        <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-center">
          <div className="mx-2 text-sm">
            {isLogin ? "Do not have an account?" : "Already have an account?"}
          </div>
          <div
            onClick={() => setIsLogin(!isLogin)}
            className="mx-2 text-blue-500 cursor-pointer"
          >
            {isLogin ? "Create Account" : "Log in"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm