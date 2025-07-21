import React from "react";
import { Link } from "react-router-dom";
import ab3 from "../../assets/images/ab3.png";
import abicon from "../../assets/icons/abicon.svg";

function Mission() {
  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover px-4 sm:px-8 md:px-12 lg:px-[120px] pb-8 sm:py-12 md:py-16 lg:py-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px]">
          {/* Left side */}
          <div className="w-full lg:w-1/2">
            {/* Vision */}
            <div className="pt-6 sm:pt-10 lg:pt-[50px] pb-6 sm:pb-8 lg:pb-[40px]">
              <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl lg:text-[32px] text-center font-medium pb-4 sm:pb-6 lg:pb-[30px]">
                <span className="relative z-10">Our vision</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[10px] lg:bottom-[20px] w-[120px] sm:w-[150px] h-[5px] sm:h-[5px] bg-[#E9AD3D] rounded-full"></span>
              </div>
              <div className="text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#555555] lg:mt-0 mt-2 lg:text-left">
                To promote sustainable agriculture and provide access to premium
                agro commodities that meet international standards.
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl lg:text-[32px] text-center font-medium pb-4 sm:pb-6 lg:pb-[30px]">
                <span className="relative z-10">Our mission</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[10px] lg:bottom-[20px] w-[130px] sm:w-[165px] h-[5px] sm:h-[5px] bg-[#E9AD3D] rounded-full"></span>
              </div>

              <div className="text-base sm:text-lg lg:text-[20px] text-[#555555] flex flex-col gap-6 lg:mt-0 mt-2">
                <p className="flex items-start gap-3 sm:gap-[12px] leading-relaxed">
                  <img
                    src={abicon}
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
                  />
                  Deliver premium Agro products with a commitment to quality,
                  traceability, and sustainability.
                </p>
                <p className="flex items-start gap-3 sm:gap-[12px] leading-relaxed">
                  <img
                    src={abicon}
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
                  />
                  <span>
                    Foster long-term partnerships with farmers, suppliers, and{" "}
                    <br className="hidden sm:inline" />
                    clients.
                  </span>
                </p>
                <p className="flex items-start gap-3 sm:gap-[12px] leading-relaxed">
                  <img
                    src={abicon}
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
                  />
                  Drive innovation in Agro trading and processing.
                </p>

                <div className="pt-6 sm:pt-8 lg:pt-[40px] lg:text-left">
                  <Link
                    to="/contact"
                    className="inline-block text-sm sm:text-base lg:text-[16px] font-semibold px-5 sm:px-6 py-3 bg-[#174B24] text-white rounded hover:bg-green-800 transition rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] mt-4 lg:mt-0"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:block">
            <img
              src={ab3}
              alt="rice"
              className="rounded-[24px] w-full h-auto max-w-md lg:max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
