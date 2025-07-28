import React from "react";
import { Link } from "react-router-dom";
import watsap from "../../assets/icons/watsap.svg";
import respo from "../../assets/images/respo.png";

function Design3() {
  const heading = (
    <h2 className="text-[32px] lg:text-[32px] font-extrabold text-white mb-[16px] leading-[48px]">
      Responsible <br /> Design
    </h2>
  );

  const description = (
    <p className="text-[14px] text-white/60 mb-[40px] leading-[28px]">
      Responsive design ensures your website looks and works perfectly on any
      device—mobile, tablet, or desktop—delivering a seamless user experience
      everywhere.
    </p>
  );

  const ContactButton = () => (
    <a
      href="https://wa.me/2348127574208" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="flex items-center gap-2 bg-[#FCE803] text-[#17191E] hover:bg-[#FCE80320] hover:text-[#FCE803] px-8 py-4 rounded-full text-[16px] font-bold shadow-lg transition duration-300">
        <img
          src={watsap}
          alt="WhatsApp Icon "
          className="hover:text-[#FCE803] text-[#FCE803]"
        />
        Contact Us
      </button>
    </a>
  );

  return (
    <div>
      {/* Desktop Version */}
      <section className="hidden lg:block relative rounded-3xl pt-[50px] px-[50px] mt-[50px] bg-[#12121290] bg-opacity-10 shadow-yellow-300 overflow-hidden">
        {/* Yellow Glow Circle */}
        <div className="absolute top-[50%] left-[-100px] w-[200px] h-[200px] bg-[#FCE803] opacity-30 rounded-full blur-3xl z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 flex justify-between items-center gap-[50px]">
          <div className="w-[40%] hover:text-[#FCE803] text-[#FCE803] ">
            {heading}
            {description}
            <ContactButton />
          </div>
          <div className="w-[60%]">
            <img
              src={respo}
              alt="Responsive web design preview"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden mt-[40px] bg-[#12121290] bg-opacity-10 px-[18px] py-[34px] rounded-2xl">
        <div className="text-[24px] font-extrabold leading-[40px] text-white mb-4">
          Responsible <br /> Design
        </div>
        <div className="text-[14px] leading-[28px] text-white/60">
          Responsive design ensures your website looks and works perfectly on
          any device—mobile, tablet, or desktop—delivering a seamless user
          experience everywhere.
        </div>
        <div className="mt-[28px]">
          <img
            src={respo}
            alt="Responsive design mobile view"
            className="w-full"
          />
        </div>
        <div className="mt-[28px]">
          <ContactButton />
        </div>
      </section>
    </div>
  );
}

export default Design3;
