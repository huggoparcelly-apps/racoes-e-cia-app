
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoGiftSharp } from "react-icons/io5";
export default function OrdersIcon() {
  const router = useRouter();

  return (  
    <>
      <button
        onClick={() => router.push("/orders")}
        className="flex items-center cursor-pointer relative"
      >
        <IoGiftSharp className="size-7"/>
      </button>
    </>
  )
}
