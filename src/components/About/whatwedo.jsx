import React from "react";
import drugabuse from "../../assets/images/drugAbuse.png";
import checked from "../../assets/icons/checked.svg";
function Whatwedo() {
  return (
    <div className="px-[120px] mb-[1000px]">
      <div>
        <div>What We Do</div>

        <div className="flex">
          <div className="w-[55%] h-[]">
            <img src={drugabuse} alt="" />
          </div>
          <div className="pl-[50px] w-[50%]">
            <p className="text-[36px] font-semibold">
              Deep Drug Abuse Prevention & Rehabilitation Services
            </p>
            <p>
              We partner with state-of-the-art centers for substance abuse
              prevention and rehabilitation. Our approach includes
            </p>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <img src={checked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
