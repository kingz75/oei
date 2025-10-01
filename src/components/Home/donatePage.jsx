import React from "react";
import donatImage from "../../assets/images/donateImage.png";
import donatImageMobile from "../../assets/images/donateImageMobile.jpg";
import sticker from "../../assets/icons/3d-sticker2.svg";
import sticker3 from "../../assets/icons/3d-sticker5.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DonatePage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      alert(`Thank you for your donation of $${amount}!`);
    }
  };
  return (
    <div>
      <div className=" relative flex justify-between items-center lg:gap-10  lg:px-[90px] px-[16px] lg:py-[80px] py-[50px] mx-auto max-w-[1440px] flex-col md:flex-row">
        <div>
          <img
            src={sticker}
            alt="background"
            className="absolute top-0 -left-10 -z-50   object-contain  pointer-events-none"
          />
          <img
            src={donatImage}
            alt="donateImage"
            className="lg:block hidden "
          />
          <img
            src={donatImageMobile}
            alt="donatImageMobile"
            className="lg:hidden block w-full"
          />
        </div>
        <div>
          <div>
            <div className="relative px-[20px] py-[43px] bg-[#ABC452]   lg:rounded-2xl">
              <div className="mb-6">
                <h2 className="text-[32px] font-semibold text-white mb-3">
                  Donate now.
                </h2>
                <p className="text-[#ffffff] text-[16px]">
                  Your donation helps us make a real impact. Give today and be
                  part of the change.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex bg-white rounded-xl overflow-hidden shadow-sm py-4 px-3 gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-4 text-gray-700 bg-[#F7F7F7] placeholder-gray-400  border-none outline-none focus:ring-0"
                      min="1"
                      step="0.01"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit(e);
                        }
                      }}
                    />
                  </div>
                  <NavLink to="/donate">
                    <button
                      // onClick={handleSubmit}
                      className="px-8 py-4 bg-[#ABC452]  rounded-lg  text-white font-semibold transition-colors duration-200"
                    >
                      Donate
                    </button>
                  </NavLink>
                </div>
              </div>
              <img
                src={sticker3}
                alt="background"
                className="absolute top-0 right-0 pointer-events-none "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
