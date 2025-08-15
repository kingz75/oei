import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import main from "../../assets/icons/mainlogo.svg";
import watsap from "../../assets/icons/watsap.svg";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }) =>
    isActive ? "text-white font-bold" : "text-[#ffffff90] hover:text-[#FCE803]";

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 w-full z-50 lg:px-[80px] lg:absolute">
      <div className="flex justify-between items-center px-4 py-4 lg:py-6 backdrop-blur-md lg:backdrop-blur-none bg-[#15171C90] lg:bg-transparent rounded-md">
        {/* Logo */}
        <button onClick={handleLogoClick} className="focus:outline-none">
          <img src={main} alt="Main Logo" className="h-[40px] lg:h-[60px]" />
        </button>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <HiX className="w-6 h-6 text-[#FCE803]" />
            ) : (
              <HiMenu className="w-6 h-6 text-[#FCE803]" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[40px] text-[18px]">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/ourwork" className={linkClasses}>
            Our Work
          </NavLink>
          {/* <NavLink to="/price" className={linkClasses}>
            Pricing
          </NavLink>*/}
          <a
            href="https://wa.me/2348127574208" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FCE803] hover:bg-[#FCE80320] text-[#17191E] hover:text-[#FCE803] rounded-[50px] py-[12px] lg:py-[12px] px-[20px] w-full lg:w-auto transition duration-300 text-center"
          >
            <div className="flex items-center justify-center gap-2 w-full">
              <img src={watsap} alt="WhatsApp Icon" />
              Contact Us
            </div>
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[96px] bg-[#15171C80] backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
          <div className="absolute top-full left-0 right-0 md:hidden z-50 bg-[#15171C] rounded-b-2xl px-[20px] py-6 shadow-lg">
            <div className="flex flex-col gap-4 text-[18px]">
              <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink
                to="/ourwork"
                className={linkClasses}
                onClick={toggleMenu}
              >
                Our Work
              </NavLink>
              {/* <NavLink to="/price" className={linkClasses} onClick={toggleMenu}>
                Pricing
              </NavLink> */}
              <a
                href="https://wa.me/2348127574208" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCE803] hover:bg-[#FCE80320] text-[#17191E] hover:text-[#FCE803] rounded-[50px] py-[12px] lg:py-[20px] px-[40px] w-full lg:w-auto transition duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-2 w-full">
                  <img src={watsap} alt="WhatsApp Icon" />
                  Contact Us
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
