import React from "react";
import ab3 from "../../assets/images/ab3.png";
import abicon from "../../assets/icons/abicon.svg";

function Mission() {
  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover px-[101px] py-[50px]">
      <div>
        <div className="flex gap-[40px]">
          <div className="w-[50%]">
            <div className="pt-[50px] pb-[40px] ">
              <div className="relative inline-block text-[#182948] text-[32px] text-center font-medium pb-[30px]">
                <span className="relative z-10">Our vision</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[20px] w-[150px] h-[5px] bg-[#E9AD3D] rounded-full"></span>
              </div>

              <div className="text-[20px] leading-[36px] text-[#555555]">
                To promote sustainable agriculture and provide access to premium
                agro commodities that meet international standards.
              </div>
            </div>
            <div>
              <div className="relative inline-block text-[#182948] text-[32px] text-center font-medium pb-[30px]">
                <span className="relative z-10">Our mission</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[20px] w-[165px] h-[5px] bg-[#E9AD3D] rounded-full"></span>
              </div>

              <div className="text-[20px] text-[#555555] ">
                <p className="flex place-items-start mb-20px] leading-[36px] gap-[12px]">
                  <img src={abicon} alt="" />
                  Deliver premium Agro products with a commitment to quality,
                  traceability, and sustainability.
                </p>
                <p className="flex place-items-start mb-20px] leading-[36px] gap-[12px]">
                  <img src={abicon} alt="" />
                  <span>
                    Foster long-term partnerships with farmers, suppliers, and{" "}
                    <br />
                    clients.{" "}
                  </span>
                </p>
                <p className="flex place-items-start mb-20px] leading-[36px] gap-[12px]">
                  <img src={abicon} alt="" />
                  Drive innovation in Agro trading and processing.
                </p>
                <div className="pt-6 lg:pt-[40px]">
                  <button className="text-sm sm:text-base lg:text-[16px] font-semibold px-6 py-3 bg-[#174B24] text-white rounded hover:bg-green-800 transition rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] mt-4 lg:mt-0">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] ">
            <img src={ab3} alt="rice" className="w-full h-auto object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
