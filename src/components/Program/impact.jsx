import React from "react";
import impact from "../../assets/images/impactimage.png";
import { NavLink } from "react-router-dom";

const ImpactReport = () => {
  return (
    <div>
      <div className="  grid grid-cols-1 lg:grid-cols-2   gap-[40px]  lg:my-[50px] my-[24px] lg:px-[120px] px-[16px] font-dmSans bg-[url('/src/assets/back/impactbg1.png')] ">
        <div className="flex flex-col justify-between h-full  ">
          {/* Header */}
          <div className="mb-[10px]">
            <h1 className="mb-2 text-[32px] text-[#182948] font-medium font-playfair">
              Impact so far
            </h1>
            <div className="w-[120px] border-[3px] border-[#abc452] rounded-full"></div>
          </div>

          {/* Description */}
          <p className="lg:mb-[40px] mb-[30px] lg:text-[20px] text-[16px] text-[#555555] lg:leading-[36px] leading-[32px]">
            Our work has the power to transform lives. Within a short span of
            time, we have been able to achieve significant results. Our
            achievements are reflected through the figures below.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2  gap-8 mb-12">
            <div className="group">
              <div className="w-full mb-2 border-2 border-[#fbeb95] rounded-full"></div>
              <div className="lg:text-[32px] text-[24px] font-medium text-[#182948] mb-2 group-hover:scale-110 transition-transform duration-300 font-playfair">
                20,000
              </div>
              <div className="lg:text-[16px] text-[14px] text-[#555555]">
                women trained in entrepreneurship
              </div>
            </div>

            <div className="group">
              <div className="w-full mb-2 border-2 border-[#fbeb95] rounded-full"></div>
              <div className="lg:text-[32px] text-[24px] font-medium text-[#182948] mb-2 group-hover:scale-110 transition-transform duration-300 font-playfair">
                5,500
              </div>
              <div className="lg:text-[16px] text-[14px] text-[#555555]">
                access to healthcare facilitated
              </div>
            </div>

            <div className="group">
              <div className="w-full border-2 border-[#fbeb95] mb-2 rounded-full"></div>
              <div className="lg:text-[32px] text-[24px] font-medium text-[#182948] mb-2 group-hover:scale-110 transition-transform duration-300 font-playfair">
                7,000
              </div>
              <div className="lg:text-[16px] text-[14px] text-[#555555]">
                youth returned to formal education
              </div>
            </div>

            <div className="group">
              <div className="w-full border-2 border-[#fbeb95] mb-2 rounded-full"></div>
              <div className="lg:text-[32px] text-[24px] font-medium text-[#182948] mb-2 group-hover:scale-110 transition-transform duration-300 font-playfair">
                980
              </div>
              <div className="lg:text-[16px] text-[14px] text-[#555555]">
                community outreach events held
              </div>
            </div>
          </div>

          {/*  Button */}
          <div>
            <button className="font-bold py-[12px] px-[16px] rounded-md text-[16px] text-[#182948] bg-[#abc452] hover:shadow-lg hover:translate-y-[-2px] transition ">
              <NavLink to="/contact">Become a Volunteer</NavLink>
            </button>
          </div>
        </div>

        {/* Right Section - Partnership */}
        <div className="bg-[url('/src/assets/back/impactbg.png')] bg-no-repeat bg-cover lg:px-[32px] px-2 lg:py-10 py-8  text-[#ffffff] flex flex-col justify-between lg:rounded-none rounded-md">
          {/* Header */}
          <div>
            <h2 className="mb-4 text-[32px] leading-[32px] font-playfair font-medium text-[#ffffff] ">
              Partnering for <span className="text-[#d0ff2a]">progress</span>
            </h2>

            {/* Description */}
            <p className="text-[#ffffff] lg:text-[20px] text-[16px]  lg:leading-[36px] font-medium  lg:mb-0 mb-10">
              With the support of our trusted partners, we're turning vision
              into reality and driving meaningful social change.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="">
            <img src={impact} alt="" className="w-screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactReport;
