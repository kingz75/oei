import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import main from "../../assets/icons/mainlogo.png";

function Header() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount (important!)
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header always above overlay */}
      <header className="bg-[#ffffff] px-6 lg:px-[120px] fixed w-full z-50 shadow-sm font-dmSans">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img
                src={main}
                alt="main"
                className="h-10 md:h-12 lg:[14px] cursor-pointer"
              />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[50px] text-[16px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#182948]"
                  : "text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#182948]"
                  : "text-[#A2A49B] hover:text-[#182948]"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/program"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#182948]"
                  : "text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Programs & Initiatives
            </NavLink>
            {/*   <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#182948]"
                  : "text-[#A2A49B] hover:text-[#182948]"
              }
            >
              News & Media
            </NavLink> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#182948]"
                  : "text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-[#182948] text-[14px] px-2 py-1 cursor-pointer"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="AR">AR</option>
            </select>

            {/* Desktop: Donate */}
            <div className="hidden md:flex bg-[#ABC452] text-[#182948] text-[16px] py-[10px] px-[14px] font-bold rounded-md items-center justify-center hover:shadow-lg hover:translate-y-[-2px] transition">
              <NavLink to="/donate">Donate Now</NavLink>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#182948]"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu + Overlay */}
      {menuOpen && (
        <>
          {/* Overlay BELOW header */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu (stays above overlay, below header) */}
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-[30px] fixed top-[64px] w-full z-50 font-dmSans">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-[#182948]"
                  : "block text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-[#182948]"
                  : "block text-[#A2A49B] hover:text-[#182948]"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/program"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-[#182948]"
                  : "block text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Programs & Initiatives
            </NavLink>
            {/*  <NavLink
              to="/news"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-[#182948]"
                  : "block text-[#A2A49B] hover:text-[#182948]"
              }
            >
             News & Media
            </NavLink> */}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block font-bold text-[#182948]"
                  : "block text-[#A2A49B] hover:text-[#182948]"
              }
            >
              Contact Us
            </NavLink>

            {/* Mobile: Donate */}
            <NavLink
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="block bg-[#182948] text-[#ffffff] text-[16px] py-[10px] px-[14px] font-bold rounded-md text-center"
            >
              Donate Now
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
