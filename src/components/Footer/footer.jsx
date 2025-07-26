import React from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import email from "../../assets/icons/Email.svg";

function Footer() {
  return (
    <div className="bg-[#131418] py-[80px] lg:px-[80px] px-[16px] shadow-md">
      <div className="lg:flex justify-between items-center">
        <div className="lg:flex gap-9">
          <a
            href="https://www.instagram.com/buildifycode?igsh=cHNkajd5bHF5eG0="
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-[#CCCCCC] items-center hover:text-white transition "
          >
            <img src={instagram} alt="Instagram" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/16cgvhQwsp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-[#CCCCCC] items-center hover:text-white transition lg:mt-0 mt-6"
          >
            <img src={facebook} alt="Facebook" />
            Facebook
          </a>
        </div>
        <a
          href="mailto:buildifycode@gmail.com"
          className="flex gap-2 text-[#CCCCCC] items-center hover:text-white transition lg:mt-0 mt-6"
        >
          <img src={email} alt="Email" />
          buildifycode@gmail.com
        </a>
      </div>
      <div className="border-b-[0.1px] border-[#2C2C2C] mt-[42px]"></div>

      <div className="text-[16px] text-[#ffffff] mt-[30px] text-center">
        Copyright © 2024 Buildifycode, All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
