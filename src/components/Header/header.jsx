import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import main from "../../assets/icons/mainiconu.svg";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Desktop nav link styles
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-green-700 underline underline-offset-4 decoration-2 font-bold"
      : "text-[#555555] hover:text-green-700";

  // Mobile nav link styles (active = green)
  const mobileLinkClasses = ({ isActive }) =>
    isActive
      ? "text-green-700 underline underline-offset-4 decoration-2 font-bold"
      : "text-white hover:text-green-300";

  // Handle logo click to scroll to top
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-transparent lg:bg-none  pt-[32px] lg:px-[101px] px-[16px] fixed lg:absolute top-0 w-full z-50">
      {/* Wrapper for header and dropdown */}
      <div className="relative w-full">
        {/* HEADER BAR */}
        <div className="flex justify-between items-center">
          {/* WRAPPER with shared background */}
          <div
            className={`flex items-center bg-white bg-opacity-10 lg:bg-opacity-0 backdrop-blur-sm px-[20px] py-4 gap-[145px] w-full
              ${
                menuOpen ? "rounded-t-[20px] rounded-b-none" : "rounded-[20px]"
              }`}
          >
            {/* Logo */}
            <button onClick={handleLogoClick} className="focus:outline-none">
              <img src={main} alt="main logo" className="h-15" />
            </button>

            {/* Hamburger Icon, visible on mobile only */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <HiX className="w-6 h-6 text-[#174B24]" />
                ) : (
                  <HiMenu className="w-6 h-6 text-[#174B24]" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-[40px] text-[18px] ">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About&nbsp;us
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Product
            </NavLink>
          </div>
        </div>

        {/* MOBILE DROPDOWN and Overlay */}
        {menuOpen && (
          <>
            {/* Fullscreen overlay for blur effect */}
            <div
              className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] z-40"
              onClick={toggleMenu}
            />

            {/* MOBILE DROPDOWN - Connected below header */}
            <div className="absolute left-0 right-0 top-full md:hidden bg-white bg-opacity-10 backdrop-blur-sm rounded-b-[20px] px-[20px] py-6 shadow-md z-50">
              <div className="flex flex-col gap-4 text-[18px]">
                <NavLink
                  to="/"
                  className={mobileLinkClasses}
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={mobileLinkClasses}
                  onClick={toggleMenu}
                >
                  About us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={mobileLinkClasses}
                  onClick={toggleMenu}
                >
                  Product
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
