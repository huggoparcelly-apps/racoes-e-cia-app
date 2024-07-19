import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

function BackHome() {
  return (
    <Link href={"/"}>
      <div className="fixed top-20 w-full flex item-center py-2 px-5 justify-between z-50 bg-yellow-300 ">
        <IoChevronBackOutline className="size-5"/>
      </div>
    </Link>
  );
}

export default BackHome;
