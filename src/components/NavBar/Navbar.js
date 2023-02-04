import React, { useState } from "react";
import { List, ShoppingBag, ShoppingCart, X } from "phosphor-react";
import { Navlinks } from "./NavLinks";
import useAuthContext from "../AuthContext/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen(!open);
  };

  const { show, setShow, cart } = useAuthContext();

  const handleCartShow = () => {
    setShow(!show);
  };
  return (
    <div className="bg-slate-900 fixed top-0 left-0  w-full h-auto py-8 px-8 flex md:flex-row flex-col justify-between md:items-center items-start gap-6 md:gap-0  z-50">
      <div className="flex w-full md:w-auto justify-between items-center">
        <a href="/" className="flex text-gray-100 items-center">
          <ShoppingBag size={28} color="currentColor" />
          <span className="font-semibold font-sans">
            We.<sub>We.</sub>
          </span>
        </a>

        {/* Hamburger  */}
        <div className="md:hidden flex items-center gap-6">
          <button onClick={handleCartShow} className="text-slate-100 relative">
            <ShoppingCart size={20} color="currentColor" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-slate-100 flex justify-center items-center text-[0.65rem] text-slate-900">
              {cart.length}
            </span>
          </button>
          <div className="text-gray-100" onClick={handleHamburger}>
            {open ? (
              <X size={28} color="currentColor" />
            ) : (
              <List size={28} color="currentColor" />
            )}
          </div>
        </div>
      </div>
      <ul
        className={`md:flex w-full bg-slate-900 md:w-auto absolute md:static h-auto transition-all duration-700 ease-in-out pl-8 pb-3 pt-3 md:p-0 left-0 flex-col md:flex-row items-start block gap-12 list-none -z-10 ${
          open ? "top-20 " : "-top-[1000px]"
        }`}
      >
        {Navlinks.map((navlink, index) => (
          <li key={index} className="mb-2 ml-2 md:mb-0 md:ml-0">
            <a
              href={navlink.link}
              onClick={handleHamburger}
              className="font-light font-sans md:text-base text-sm text-gray-100"
            >
              {navlink.name}
            </a>
          </li>
        ))}
        <li className="hidden md:flex mb-2 ml-2 md:mb-0 md:ml-0 pr-4">
          <button onClick={handleCartShow} className="text-slate-100 relative">
            <ShoppingCart size={20} color="currentColor" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-slate-100 flex justify-center items-center text-[0.65rem] text-slate-900">
              {cart.length}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
