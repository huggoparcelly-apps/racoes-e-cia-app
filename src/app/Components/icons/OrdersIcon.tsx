
import Link from "next/link";
import { IoGiftSharp } from "react-icons/io5";
export default function OrdersIcon() {
  return (
    <>
      <Link
        href='/orders'
        className="flex items-center cursor-pointer relative"
      >
        <IoGiftSharp className="size-7"/>
      </Link>
    </>
  )
}
