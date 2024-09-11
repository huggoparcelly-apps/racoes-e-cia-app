import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function HomeIcon() {
  return (
    <>
      <Link
        href='/'
        className="flex items-center cursor-pointer relative"
      >
        <IoHome className="size-7"/>
      </Link>
    </>
  )
}
