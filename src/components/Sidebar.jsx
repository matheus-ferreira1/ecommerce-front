import { useContext } from "react";

import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import CartItem from "../components/CartItem";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <aside
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 ">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 hover:bg-red-700 transition duration-300 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 hover:bg-gray-400 transition duration-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary hover:bg-gray-600 transition duration-200 flex p-4 justify-center items-center text-white w-full font-medium"
        >
          View Cart
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
