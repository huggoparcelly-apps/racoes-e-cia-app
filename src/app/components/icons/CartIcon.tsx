"use client";

import { IoCartSharp } from "react-icons/io5";
import { useCartStore } from "../../utils/store";

export default function CartIcon() {
  const useStore = useCartStore();

  const totalQuantity = useStore.cart?.reduce((total, item) => 
    total + (item.quantity? item.quantity : 1)
  , 0);
  
  return (
    <>
      <div
        // onClick={() => useStore.toggleCart()}
        className="flex items-center cursor-pointer relative"
      >
        <IoCartSharp className="size-7"/>
        <span
          className="
            bg-teal-600 
            text-sm 
            font-bold 
            rounded-full 
            h-6 w-6
            flex items-center justify-center
            absolute
            left-5
            bottom-4"
        >
          {totalQuantity}
        </span>
      </div>

      {/* {useStore.isOpen && (
        <CartDrawer />
      )} */}
    </>
  )
}
