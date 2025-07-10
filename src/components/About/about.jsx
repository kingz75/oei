import React from "react";
import ab1 from "../../assets/images/ab1.png";
import ab2 from "../../assets/images/ab2.png";
import Mission from "../About/mission.jsx";

function About() {
  return (
    <div>
      <section className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover pb-16 pt-28 px-4 sm:px-6 md:px-10 lg:px-[70px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[20px] items-start">
          {/* LEFT SIDE */}
          <div className="pt-6 md:pt-[35px]">
            {/* Section Title */}
            <div className="flex justify-center pb-8 md:pb-[40px]">
              <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl md:text-[32px] font-medium">
                <span className="relative z-10">About Us</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[100px] sm:w-[120px] md:w-[150px] h-[4px] sm:h-[5px] md:h-[6px] bg-[#E9AD3D] rounded-full"></span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-[#333333] text-base sm:text-lg md:text-[20px] leading-6 sm:leading-8 md:leading-[36px] mb-6 md:mb-10">
              Green World Agro General Trading L.L.C is a leading agricultural
              trading company based in Dubai, UAE. We specialize in sourcing and
              distributing premium quality agro products, including rice,
              hibiscus flower, sesame, soya beans, and other high-value crops,
              serving both the UAE and international markets. As an affiliate of
              Tiamin—a renowned name in agro food processing and commodity
              farming—our operations are built on a foundation of ethical
              practices, innovation, and a relentless pursuit of quality.
            </p>

            <img
              src={ab1}
              alt="Rice field"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={ab2}
              alt="Farmer"
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[922px] object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl"></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
              <span className="inline-block bg-[#174B24] text-white text-sm sm:text-base font-semibold py-2 sm:py-[14px] w-32 sm:w-[173px] text-center rounded-tl-xl rounded-br-xl">
                Who we are
              </span>

              <p className="text-white font-bold text-sm sm:text-base md:text-[20px] leading-5 sm:leading-6 mt-4 sm:mt-6 md:mt-0">
                Our parent company, Tiamin, is headquartered in Nigeria and is
                celebrated for its leadership in rice processing, sustainable
                byproduct utilization (such as rice husk briquettes), and a
                dynamic approach to global agricultural trade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Mission />
    </div>
  );
}

export default About;
