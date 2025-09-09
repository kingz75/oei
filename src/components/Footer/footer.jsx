import React from "react";
import { Link as RouterLink } from "react-router-dom";
import mainicond from "../../assets/icons/mainicon.svg";
import phone from "../../assets/icons/Phone.svg";
import email from "../../assets/icons/Email.svg";
import location from "../../assets/icons/location.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import x from "../../assets/icons/x.svg";

function Footer() {
  return (
    <footer className="lg:bg-[url('/src/assets/back/footerbg.png')] bg-[url('/src/assets/back/footerbgm.png')] bg-center bg-cover px-4 sm:px-8 md:px-12 lg:px-[101px] py-8 lg:py-[70px]">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        {/* Logo */}
        <div className="flex  lg:justify-start pt-2 lg:mb-6">
          <RouterLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={mainicond}
              alt="Ohunene Empowerment Initiative logo"
              className="w-32 md:w-40 lg:w-auto cursor-pointer"
            />
          </RouterLink>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mt-3">
          {/* About / Description + Social Icons */}
          <div>
            <p className="text-[#CCCCCC] text-[16px] sm:text-[17px] md:text-lg leading-relaxed max-w-md mb-4">
              Ohunene Empowerment Initiative is a non-profit organization
              dedicated to empowering vulnerable women, youth, and children in
              Kogi State through education, healthcare, and economic
              development.
            </p>
            {/* Social Media */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/2349119111100"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  src={x}
                  alt="WhatsApp"
                  className="h-6 w-6 hover:opacity-70 transition-opacity"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-6 w-6 hover:opacity-70 transition-opacity"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-6 w-6 hover:opacity-70 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Our Links */}
          <div className="flex flex-col gap-2 text-[#CCCCCC] text-[16px] sm:text-[17px] md:text-[18px] lg:pl-[120px] lg:-mt-[40px]">
            <h3 className="font-semibold text-lg sm:text-xl text-[#ABC452] mb-3">
              Our Links
            </h3>
            <a
              href="/privacy"
              className="hover:text-[#ABC452] transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#ABC452] transition-colors">
              Terms and Conditions
            </a>
            <a
              href="/get-involved"
              className="hover:text-[#ABC452] transition-colors"
            >
              How to Get Involved
            </a>
          </div>

          {/* Our Contact */}
          <div className="text-[#CCCCCC] lg:-mt-[40px]">
            <h3 className="font-semibold text-lg sm:text-xl text-[#ABC452] mb-3">
              Our Contact
            </h3>
            <div className="flex flex-col gap-3 max-w-sm text-[16px] sm:text-[17px] md:text-[18px]">
              <p className="flex gap-2 items-center">
                <img src={email} alt="Email" className="h-5 w-5" />
                <a
                  href="mailto:info@oei.ng"
                  className="hover:text-[#ABC452] transition-colors break-all"
                >
                  info@oei.ng
                </a>
              </p>
              <p className="flex gap-2 items-center">
                <img src={phone} alt="Phone" className="h-5 w-5" />
                <a
                  href="tel:+2349119111100"
                  className="hover:text-[#ABC452] transition-colors"
                >
                  +234 91 1911 1100
                </a>
              </p>
              <p className="flex gap-2 items-start">
                <img src={location} alt="Location" className="h-5 w-5 mt-1" />
                <span className="leading-snug">
                  No. 48 Anthony Enahoro Street, Utako, Abuja, Nigeria
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#ABC452] pt-6 mt-10">
          <p className="text-[#CCCCCC] text-center text-[14px] sm:text-[15px] md:text-[16px]">
            ©2025 Ohunene Empowerment Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
