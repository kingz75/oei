import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";

function Why() {
  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover px-4 lg:px-[101px] py-12 lg:py-[101px]">
      <div className="max-w-7xl mx-auto">
        <div className=" lg:text-center lg:pl-0 pl-2">
          <h2 className="text-[24px] lg:text-[40px] font-semibold text-[#174B24]">
            Why <span className="text-[#940202] mx-[0.5px]">Choose</span> Us?
          </h2>
          <p className="mt-3 lg:mt-6 text-[16px] lg:text-[20px] leading-[28px] lg:leading-[40px] text-[#555555]">
            Rigorous quality control standards aligned with international
            certifications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FEF6EB] rounded-br-[60px] rounded-tl-[60px] text-[#555555] flex flex-col lg:items-center lg:text-center p-8">
            <img
              src={icon1}
              alt="Parent Company Backing"
              className="w-[64px] lg:w-[106px]"
            />
            <h3 className="mt-8 text-[14px] lg:text-[16px] font-semibold text-[#333333] font-gotham ">
              Parent Company Backing
            </h3>
            <p className="mt-4 text-[14px] lg:text-[14px] leading-[28px] font-gotham">
              Benefit from the expertise and resources of Tiamin Group, a leader
              in agro-processing and commodity trading.
            </p>
          </div>

          <div className="bg-[#F8FAE9] rounded-br-[60px] rounded-tl-[60px] text-[#555555] flex flex-col lg:items-center lg:text-center p-8">
            <img
              src={icon2}
              alt="Strategic Location"
              className="w-[64px] lg:w-[106px]"
            />
            <h3 className="mt-8 text-[14px] lg:text-[16px] font-semibold text-[#333333] font-gotham">
              Strategic Location
            </h3>
            <p className="mt-4 text-[14px] lg:text-[14px] leading-[28px] font-gotham">
              Based in Dubai, we leverage the UAE's logistics and trade
              infrastructure to ensure timely delivery and competitive pricing.
            </p>
          </div>

          <div className="bg-[#FFF9EE] rounded-br-[60px] rounded-tl-[60px] text-[#555555] flex flex-col lg:items-center lg:text-center p-8">
            <img
              src={icon3}
              alt="Diverse Product Range"
              className="w-[64px] lg:w-[106px]"
            />
            <h3 className="mt-8 text-[14px] lg:text-[16px] font-semibold text-[#333333] font-gotham">
              Diverse Product Range
            </h3>
            <p className="mt-4 text-[14px] lg:text-[14px] leading-[28px] font-gotham">
              From premium rice to organic hibiscus and essential oil seeds, we
              cover a broad spectrum of agro commodities.
            </p>
          </div>

          <div className="bg-[#F3F6EC] rounded-br-[60px] rounded-tl-[60px] text-[#555555] flex flex-col lg:items-center lg:text-center p-8">
            <img
              src={icon4}
              alt="Customer-Centric Approach"
              className="w-[64px] lg:w-[106px]"
            />
            <h3 className="mt-8 text-[14px] lg:text-[16px] font-semibold text-[#333333] font-gotham">
              Customer-Centric Approach
            </h3>
            <p className="mt-4 text-[14px] lg:text-[14px] leading-[28px] font-gotham">
              We prioritize client satisfaction through personalized service,
              transparency, and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
