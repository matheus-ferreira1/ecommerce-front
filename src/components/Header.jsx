import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import Logo from "../assets/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 py-2 ${
        isActive ? "bg-gray-200/90 shadow-md" : "bg-gray-300"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <img src={Logo} className="w-[40px] " />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
