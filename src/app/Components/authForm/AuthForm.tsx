'use client';

import { useEffect, useState } from "react";
import GoogleAuth from "./GoogleAuth";
import Login from "./Login";
import SignUp from "./SignUp";
import useAuthStore from "@/app/stores/authStore";
import { usePathname, useRouter } from "next/navigation";

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

        <GoogleAuth prefix={isLogin ? "Entrar" : "Criar"} />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-center">
          <div className="mx-2 text-sm">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
          </div>
          <div
            onClick={() => setIsLogin(!isLogin)}
            className="mx-2 text-blue-500 cursor-pointer"
          >
            {isLogin ? "Criar Conta" : "Entrar"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm