import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "admin/sellers", label: "Pedidos" },
  { href: "admin/products", label: "Produtos" },
  { href: "admin/customers", label: "Clientes" },
  { href: "admin/suppliers", label: "Fornecedor" },
  { href: "admin/dashboard", label: "Dashboard" },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-yellow-300 text-yellow-900 flex flex-col">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-2xl font-bold">Menu Admin</h1>
      </div>
      <nav className="mt-10 flex-grow">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
