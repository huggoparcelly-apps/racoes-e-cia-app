import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-8 text-sm">
      <button
        className="border rounded-md px-3 py-2 bg-yellow-900"
        onClick={() => router.push("/auth")}
      >
        Entrar
      </button>
    </div>
  );
}

export default LoginButton;
