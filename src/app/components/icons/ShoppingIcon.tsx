
import Link from "next/link";
import { IoGiftSharp } from "react-icons/io5";
export default function ShoppingIcon() {
  return (
    <>
      <Link
        href='/shoppings'
        className="flex items-center cursor-pointer relative"
      >
        <IoGiftSharp className="size-7"/>
      </Link>
    </>
  )
}
