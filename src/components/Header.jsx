import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-gray-700 text-white">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
