import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function MobileNavbar({ setVisibleMenu, visibleMenu, dropdown_icon }) {
  return (
    <div
      className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
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
            src={dropdown_icon}
            alt="DropDown Menu"
            className="h-4 rotate-180 "
          />
          <p>Back</p>
        </div>
        <NavLink
          onClick={() => setVisibleMenu(false)}
          className="mt-2 py-4 pl-8 border-bottom   "
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setVisibleMenu(false)}
          className="py-4 pl-8 border "
          to="/collections"
        >
          Collections
        </NavLink>
        <NavLink
          onClick={() => setVisibleMenu(false)}
          className="py-4 pl-8 border"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setVisibleMenu(false)}
          className="py-4 pl-8 border "
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

MobileNavbar.propTypes = {
  setVisibleMenu: PropTypes.func,
  visibleMenu: PropTypes.bool,
  dropdown_icon: PropTypes.string,
};

export default MobileNavbar;
