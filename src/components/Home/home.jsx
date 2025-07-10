import React from "react";
import Why from "../Home/why.jsx";
import Sustain from "../Home/sustain.jsx";

function Home() {
  return (
    <div>
      <div className="bg-[url('/src/assets/back/homebg.png')] bg-cover bg-center min-h-screen flex items-end justify-center px-4 sm:px-6 lg:px-[101px] pb-8 sm:pb-10 lg:pb-[64px]">
        <div className="w-full max-w-7xl flex flex-col justify-between h-full py-10 sm:py-16 lg:py-0">
          <div>
            <div className="font-bold font-gotham text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-snug sm:leading-tight lg:leading-[50px] pt-32 sm:pt-48 lg:pt-[350px] max-w-[90%] sm:max-w-[80%] [word-spacing:0.25rem]">
              Welcome to <span className="text-[#B8FF29]">Green World</span>{" "}
              Agro General Trading L.L.C
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:mt-[68px] mt-8 w-full">
              <div className="text-[#FFFFFF] text-sm sm:text-base font-gotham lg:text-[18px] leading-relaxed lg:leading-[40px] pr-0 lg:pr-[250px] [word-spacing:0.1rem] flex-1">
                Your trusted partner in premium agricultural products and
                commodities trading in the UAE. As a proud affiliate of the
                renowned Tiamin Group, we bring decades of expertise in rice
                processing, sustainable agro-products, and international
                agricultural commodity trading to the heart of Dubai.
              </div>

              <div className="pt-6 lg:pt-0">
                <button className="text-sm sm:text-base lg:text-[16px] font-semibold px-6 py-3 bg-[#174B24] text-white rounded hover:bg-green-800 transition rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] mt-4 lg:mt-0">
                  Our Services
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-[80px]">
            <div className="border-b border-[#FFFFFF]"></div>
            <div className="flex justify-center mt-6 text-[#ACACAC] text-sm sm:text-base lg:text-[20px]">
              <div>Explore More Below</div>
            </div>
          </div>
        </div>
      </div>

      <Why />
      <Sustain />
    </div>
  );
}

export default Home;
