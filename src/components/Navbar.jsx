import { Link, NavLink } from "react-router-dom";

import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

// 1 means 4px
function Navbar() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-36" />

      {/* Navigation Menu => By Default hidden, Visible on screens width >= 640px(SM) */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center uppercase ">
          <p>Home</p>
          {/* Only active link should have horizontal line below it. Check app.css for styling of active link */}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collections"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col gap-1 items-center uppercase "
        >
          <p>Contact</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      {/*  */}

      {/*Search Profile Cart and mobile Menu icons */}
      <div className="flex items-center gap-6">
        <img
          role="button"
          className="w-5"
          src={assets.search_icon}
          alt="Search"
        />

        {/* Profile with dropdown options below it. */}
        <div className="group relative">
          <img
            className="w-5"
            src={assets.profile_icon}
            alt="Profile"
            role="button"
          />
          {/* Dropdown options */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p role="button" className=" hover:text-black">
                My Profile
              </p>
              <p role="button" className=" hover:text-black">
                Orders
              </p>
              <p role="button" className=" hover:text-black">
                Logout
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        {/* Menu icon only visible for width <= 640px */}
        <img
          className="sm:hidden w-5 "
          src={assets.menu_icon}
          alt="Menu"
          role="button"
          onClick={() => setVisibleMenu(!visibleMenu)}
        />
      </div>
      {/* Navigation menu for smaller screens <= 640px */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visibleMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            className="flex items-center gap-4 p-3  transition-opacity"
            onClick={() => setVisibleMenu(false)}
            role="button"
          >
            <img
              src={assets.dropdown_icon}
              alt="DropDown Menu"
              className="h-4 rotate-180 "
            />
            <p>Back</p>
          </div>
          <NavLink
            role="button"
            onClick={() => setVisibleMenu(false)}
            className="mt-2 py-4 pl-8 border-bottom hover:bg-gray-300  "
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            role="button"
            onClick={() => setVisibleMenu(false)}
            className="py-4 pl-8 border hover:bg-gray-300 "
            to="/collections"
          >
            Collections
          </NavLink>
          <NavLink
            role="button"
            onClick={() => setVisibleMenu(false)}
            className="py-4 pl-8 border hover:bg-gray-300 "
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            role="button"
            onClick={() => setVisibleMenu(false)}
            className="py-4 pl-8 border  hover:bg-gray-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
