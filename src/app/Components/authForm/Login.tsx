"use client";

import { useState } from "react";

import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { MdError } from "react-icons/md";

interface LoginInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(inputs);
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        className="border border-gray-300 rounded-md p-2 text-sm w-full mb-2"
        type="text"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        placeholder="Senha"
        className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      {error && (
        <Alert status="error" >
          <MdError size={30} color="red"/>
          {error.message.replace("Firebase:", "")}
        </Alert>
      )}

      <button
        className="w-full text-white bg-black p-2 text-sm rounded-md"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Entrar"}
      </button>
    </div>
  );
};

export default Login;
