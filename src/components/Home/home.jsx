import React from "react";
import { Link } from "react-router-dom";
import groupm from "../../assets/images/Groupimagem.png";
import group from "../../assets/images/Groupimage.png";
import homeicon from "../../assets/icons/homeicon.svg";
import briefcase from "../../assets/icons/briefcase.svg";
import watsap from "../../assets/icons/watsap.svg";
import Design from "../Home/design.jsx";

function Home() {
  return (
    <div>
      <section className="relative h-screen bg-no-repeat bg-cover lg:bg-center pt-[100px] px-[16px] lg:px-0 lg:bg-[url('/src/assets/back/homebg.png')] bg-[url('/src/assets/back/homebgm.png')]">
        <div className="flex flex-col justify-between items-center text-center h-full">
          {/* Logo */}
          <div className="w-[264px] lg:w-auto">
            <img src={homeicon} alt="Home Icon" />
          </div>

          {/* Headline */}
          <h1 className="text-white font-extrabold text-[32px] lg:text-[64px] pt-[32px] lg:pt-5 px-4 lg:px-[200px]">
            Build a website that speaks, engages, and converts!
          </h1>

          {/* CTA Buttons */}
          <div className="flex justify-center w-full pt-[40px] lg:pt-5">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-[16px] w-full max-w-[500px]">
              <Link
                to="/about"
                className="bg-[#FFFFFF24] hover:bg-[#ffffff48] text-white rounded-[50px] py-[12px] lg:py-[20px] px-[40px] w-full lg:w-auto transition duration-300 text-center"
              >
                <button className="flex items-center justify-center gap-2 w-full">
                  <img src={briefcase} alt="Briefcase Icon" />
                  Our Work
                </button>
              </Link>

              <a
                href="https://wa.me/2349012345678" // Replace with your actual WhatsApp number
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

          {/* Illustrations */}
          <div className="mt-[25px]">
            <img
              src={group}
              alt="Group Illustration"
              className="hidden lg:block"
            />
            <img
              src={groupm}
              alt="Mobile Group Illustration"
              className="block lg:hidden"
            />
          </div>
        </div>
      </section>

      {/* Design Component */}
      <Design />
    </div>
  );
}

export default Home;
