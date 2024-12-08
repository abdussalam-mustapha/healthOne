import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import CustomBtn from "./CustomBtn";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const [isMobileOpen, setIsMobileOpen] = useState(true)

  const handleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <nav className={`mt-6 flex ${isMobileOpen ? "flex-col items-center gap-32 bg-black lg:hidden" : "justify-between items-center"}`}>
      <div>
        <img src={assets.logo} alt="logo" />
      </div>

      <ul className={`flex gap-8 font-medium text-base leading-6 ${isMobileOpen ? "flex-col gap-32": ""}`}>
        <li>
          <NavLink
            to="/"
            className="relative group text-dark-one hover:text-blue-700"
          >
            HOME
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-doctors"
            className="relative group text-dark-one hover:text-blue-700"
          >
            ALL DOCTORS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="relative group text-dark-one hover:text-blue-700"
          >
            ABOUT
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="relative group text-dark-one hover:text-blue-700"
          >
            CONTACT
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
      </ul>

      <div>
        <CustomBtn />
      </div>

      <div className="hidden">
      <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
