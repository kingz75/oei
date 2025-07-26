import React from "react";
import { Link } from "react-router-dom";
import d2 from "../../assets/images/d2.png";
import watsap from "../../assets/icons/watsapw.svg";

function Design2() {
  const headingText = "Designing sleek, conversion-driven platforms.";
  const description =
    "We specialize in creating clean, modern websites that not only look great but are strategically designed to drive user engagement, boost conversions, and support business growth. Every element is crafted with purpose to deliver results.";

  const Button = () => (
    <a
      href="https://wa.me/2348127574208" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="flex items-center gap-2 bg-[#FFFFFF24] text-white hover:bg-[#ffffff48] px-8 py-4 rounded-full text-[16px] font-bold shadow-lg transition duration-300">
        <img src={watsap} alt="WhatsApp Icon" />
        Contact Us
      </button>
    </a>
  );

  return (
    <div>
      {/* Desktop Version */}
      <section className="hidden lg:block relative rounded-3xl mt-[50px] bg-[#12121290] shadow-yellow-300 overflow-hidden">
        {/* Yellow Glow Circle */}
        <div className="absolute top-[50%] left-[-100px] w-[200px] h-[200px] bg-[#FCE803] opacity-30 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 flex justify-between items-center pl-[50px]">
          <div className="w-[40%]">
            <h2 className="text-[32px] font-extrabold text-white mb-4 leading-[48px]">
              {headingText}
            </h2>
            <p className="text-[14px] text-white/60 mb-8 leading-[28px]">
              {description}
            </p>
            <Button />
          </div>
          <div className="w-[60%]">
            <img
              src={d2}
              alt="Website design example"
              className="rounded-br-3xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden mt-[40px] bg-[#12121290] bg-opacity-10 px-[18px] py-[34px] rounded-2xl">
        <h2 className="font-extrabold text-[24px] leading-[40px] text-white">
          Designing sleek, <br /> conversion-driven platforms.
        </h2>
        <p className="text-[14px] leading-[28px] mt-4 text-white/60">
          {description}
        </p>
        <div className="mt-10">
          <Button />
        </div>
      </section>
    </div>
  );
}

export default Design2;
