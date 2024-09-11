import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavItem {
  pathname: string;
  label: string;
}

const navItems: NavItem[] = [
  { pathname: "/admin/orders", label: "Pedidos" },
  { pathname: "/admin/products", label: "Produtos" },
];

function NavbarAdmin() {
  const router = useRouter();
  
  return (
    <div className="flex w-72 items-center justify-between ">
        {navItems.map((item) => (
          <Link
            key={item.pathname}
            href={item.pathname}
            className="py-2.5 px-4 rounded transition duration-200 bg-yellow-800 hover:bg-yellow-600 hover:text-yellow-900"
          >
            {item.label}
          </Link>
        ))}
      
    </div>
  );
}

export default NavbarAdmin;
