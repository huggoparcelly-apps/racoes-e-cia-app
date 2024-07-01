
import { IoCartSharp } from "react-icons/io5";

export default function CartIcon() {
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
            h-4 w-4
            flex items-center justify-center
            absolute
            left-5
            bottom-4"
        >
          {/* {useStore.cart?.length} */}
        </span>
      </div>

      {/* {useStore.isOpen && (
        <CartDrawer />
      )} */}
    </>
  )
}
