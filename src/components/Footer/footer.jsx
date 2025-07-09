import React from "react";
import { Link as RouterLink } from "react-router-dom";
import mainicond from "../../assets/icons/mainicond.svg";
import phone from "../../assets/icons/Phone.svg";
import email from "../../assets/icons/Email.svg";
import location from "../../assets/icons/location.svg";

function Footer() {
  return (
    <footer className="bg-[url('/src/assets/back/footerbg.png')] bg-center bg-cover px-4 sm:px-8 md:px-16 lg:px-[101px] py-10 lg:py-0">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 lg:pb-[101px]">
        {/* Logo */}
        <div className="flex  lg:justify-start pt-5 lg:pt-[70px]">
          <img
            src={mainicond}
            alt="Green World Agro Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-[100%]">
          {/* About / Description */}
          <div className="lg:w-[130%]">
            <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed">
              Bringing decades of expertise in rice processing, sustainable
              agro-products, and international agricultural commodity trading to
              the heart of Dubai.
            </p>
            <p className="text-[#CCCCCC] text-base leading-relaxed mt-3 hidden lg:block">
              Operating Hours: Monday - Friday, 9:00 AM - 6:00 PM (WAT) P.O.
              Box: 64820
            </p>
          </div>

          {/* Our Links (hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-2 text-[#CCCCCC] lg:pl-[150px] lg:-m-5">
            <h3 className="font-semibold text-xl text-[#E9AD3D] mb-2">
              Our Links
            </h3>
            <RouterLink to="/" className="hover:text-[#E9AD3D]">
              Home
            </RouterLink>
            <RouterLink to="/about" className="hover:text-[#E9AD3D]">
              About us
            </RouterLink>
            <RouterLink to="/contact" className="hover:text-[#E9AD3D]">
              Product
            </RouterLink>
          </div>

          {/* Our Contact */}
          <div className="text-[#CCCCCC] lg:-m-5">
            <h3 className="font-semibold text-xl text-[#E9AD3D] mb-2">
              Our Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <p className="flex gap-2 items-center">
                  <img src={phone} alt="Phone" className="h-5 w-5" />
                  +971-4-2261556
                </p>
                <p className="flex gap-2 items-center">
                  <img src={phone} alt="Mobile" className="h-5 w-5" />
                  +971-52-8528538
                </p>
              </div>
              <p className="flex gap-2 items-center">
                <img src={email} alt="Email icon" className="h-5 w-5" />
                <a
                  href="mailto:info@greenworldagrotrade.com"
                  className="hover:text-[#E9AD3D] transition-colors duration-300"
                >
                  info@greenworldagrotrade.com
                </a>
              </p>

              <p className="flex gap-2 items-start">
                <img src={location} alt="Location" className="h-5 w-5 mt-1" />
                <span>
                  402, Sheikh Building, Near Al Ansari Exchange, Naif Road,
                  Deira, Dubai, UAE
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#E9AD3D] pt-6">
          <p className="text-[#CCCCCC] text-center text-sm">
            ©2025 Green World Agro General Trading L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
