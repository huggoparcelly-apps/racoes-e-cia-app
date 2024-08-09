import useLogout from "@/hooks/useLogout";

function LogoutButton() {
  const { handleLogout, isLogginOut } = useLogout();
  return (
    <div className="flex items-center gap-8 text-sm">
      <button
        className="border rounded-md px-3 py-2 bg-yellow-900"
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
}

export default LogoutButton;
