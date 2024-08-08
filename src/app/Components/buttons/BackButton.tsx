"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackButton() {


  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 w-full flex item-center py-2 px-5 justify-between z-50 bg-yellow-300 "
    >
      <IoChevronBackOutline className="size-5 text-zinc-950" />
    </button>
  );
}
