import Link from "next/link";

function AddProductAdmin() {
  return (
    <>
      <Link
        href={"/admin/products/new"}
        className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"
      >
        Adicionar produto
      </Link>
    </>
  );
}

export default AddProductAdmin;
