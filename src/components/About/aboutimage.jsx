import React from "react";
import abi1 from "../../assets/images/abi1.png";
import abi2 from "../../assets/images/abi2.png";
import abi3 from "../../assets/images/abi3.png";
import abi4 from "../../assets/images/abi4.png";
import abi5 from "../../assets/images/abi5.png";

function Aboutimage() {
  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover  lg:pb-[70px] pt-[32px] lg:pt-[39px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
      <div>
        <div className="flex lg:gap-[12px] gap-[6px] lg:mb-[39px] mb-[32px]">
          <div className="w-full">
            {" "}
            <img src={abi1} alt="" className="lg:h-auto h-[378px]" />{" "}
          </div>
          <div className="w-full">
            {" "}
            <img src={abi2} alt="" className="lg:h-auto h-[378px]" />{" "}
          </div>
        </div>
        <div className="flex lg:gap-[12px] gap-[6px] lg:h-auto h-[378px]">
          <div className="">
            <img src={abi3} alt="" className="lg:h-auto h-[378px]" />
          </div>
          <div className="">
            <div>
              {" "}
              <img src={abi4} alt="" className="lg:h-auto h-[186px]" />{" "}
            </div>
            <div className="lg:mt-[12px] mt-[6px]">
              {" "}
              <img src={abi5} alt="" className="lg:h-auto h-[186px]" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutimage;
