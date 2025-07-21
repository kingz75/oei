import React, { useState } from "react";
import ab1 from "../../assets/images/ab1.png";
import ab2 from "../../assets/images/ab2.png";
import Mission from "../About/mission.jsx";
import Aboutimage from "../About/aboutimage.jsx";

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <section className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover lg:pb-0 pt-28 lg:pt-[200px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
        <div className="max-w-7xl mx-auto  gap-8 md:gap-[20px] items-start">
          {/* LEFT SIDE */}
          <div className="pt-6 md:pt-[33px]">
            {/* Section Title */}
            <div className="flex lg:justify-center pb-8 md:pb-[55px]">
              <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl md:text-[32px] font-medium">
                <span className="relative z-10">About Us</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[100px] sm:w-[120px] md:w-[150px] h-[4px] sm:h-[5px] md:h-[6px] bg-[#E9AD3D] rounded-full"></span>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <p
                className="
                  text-[#333333] text-[20px] leading-[36px] mb-6
                
                
                "
              >
                Green World Agro General Trading L.L.C is a leading agricultural
                trading company based in Dubai, UAE. We specialize in sourcing
                and distributing premium quality agro products, including rice,
                hibiscus flower, sesame, soya beans, ginger, and other
                high-value crops, serving both the UAE and international
                markets. Additionally, we supply advanced agricultural machinery
                and equipment, catering to the needs of modern farming and
                processing operations. As an affiliate of Tiamin Group—a
                renowned name in agro-food processing and commodity farming
                headquartered in Nigeria—our operations are built on a
                foundation of ethical practices, innovation, and a relentless
                pursuit of quality.
              </p>
            </div>

            {/* Paragraph - Collapsible on Mobile */}
            <div className="relative lg:hidden">
              <p
                className={`
                  text-[#333333] text-base sm:text-lg md:text-[20px] leading-[28px] sm:leading-8 md:leading-[36px] mb- md:mb-10
                  overflow-hidden transition-all duration-500
                  ${expanded ? "max-h-[2000px]" : "max-h-[280px]"}
                  md:max-h-none
                `}
              >
                Green World Agro General Trading L.L.C is a leading agricultural
                trading company based in Dubai, UAE. We specialize in sourcing
                and distributing premium quality agro products, including rice,
                hibiscus flower, sesame, soya beans, ginger, and other
                high-value crops, serving both the UAE and international
                markets. Additionally, we supply advanced agricultural machinery
                and equipment, catering to the needs of modern farming and
                processing operations. As an affiliate of Tiamin Group—a
                renowned name in agro-food processing and commodity farming
                headquartered in Nigeria—our operations are built on a
                foundation of ethical practices, innovation, and a relentless
                pursuit of quality. Tiamin Group is celebrated for its
                leadership in rice processing, sustainable byproduct utilization
                (such as rice husk briquettes), and dynamic global agricultural
                trade. Over the years, Green World Agro General Trading has
                supplied turnkey rice milling machinery and agricultural
                equipment to Tiamin Rice, which is now the largest rice mill in
                Africa with a daily milling capacity of 920 metric tons. Tiamin
                Rice utilizes state-of-the-art machinery for rice processing and
                converts waste, such as rice husk, to power steam boilers and
                produce charcoal briquettes. Through our extensive international
                market contacts, we supply farming equipment and machinery to
                support the cultivation of over 10,000-hectare expanse of land
                in Nigeria. Additionally, Techgen Agro Consults, the technical
                subsidiary of Tiamin Group, is one of our most reliable
                customers in Nigeria, benefiting from our high-quality machinery
                and equipment supplies.
              </p>

              {/* See More / See Less button - visible only on mobile */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="md:hidden text-[#174B24] font-semibold mb-4"
              >
                {expanded ? "See Less" : "See More"}
              </button>
            </div>

            <img
              src={ab1}
              alt="Rice field"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="relative lg:block hidden">
            <p
              className="
                  text-[#333333] text-[20px] leading-[36px] mt-6 
                
                
                "
            >
              Tiamin Group is celebrated for its leadership in rice processing,
              sustainable byproduct utilization (such as rice husk briquettes),
              and dynamic global agricultural trade. Over the years, Green World
              Agro General Trading has supplied turnkey rice milling machinery
              and agricultural equipment to Tiamin Rice, which is now the
              largest rice mill in Africa with a daily milling capacity of 920
              metric tons. Tiamin Rice utilizes state-of-the-art machinery for
              rice processing and converts waste, such as rice husk, to power
              steam boilers and produce charcoal briquettes. Through our
              extensive international market contacts, we supply farming
              equipment and machinery to support the cultivation of over
              10,000-hectare expanse of land in Nigeria. Additionally, Techgen
              Agro Consults, the technical subsidiary of Tiamin Group, is one of
              our most reliable customers in Nigeria, benefiting from our
              high-quality machinery and equipment supplies.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative rounded-xl overflow-hidden lg:mt-5 mt-2">
            <img
              src={ab2}
              alt="Farmer"
              className="w-full h-[1000px] sm:h-[450px] md:h-[1000px] lg:h-auto object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl"></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
              <span className="inline-block bg-[#174B24] text-white text-sm sm:text-base font-semibold py-2 sm:py-[14px] w-32 sm:w-[173px] text-center rounded-tl-xl rounded-br-xl">
                Who <span className="text-[#E9AD3D]"> we </span> are
              </span>

              <p className="text-white font-bold text-sm sm:text-base md:text-[20px] leading-[28px] sm:leading-[36px] mt-4 sm:mt-6 md:mt-0">
                As part of our sustainability strategy, we have pioneered the
                Irrigate Nigeria Project through our partnership with Tiamin
                Rice, a transformative initiative born from our mutually
                beneficial and sustainable in-grower scheme with smallholder
                farmers. This collaborative effort, driven by public-private
                partnerships, aims to enhance Nigeria’s food security and
                sustainable agricultural development. Through this project,
                farmers are trained in Good Agricultural Practices (GAP) and
                environmental sustainability strategies, including the
                deployment of solar-powered irrigation systems, to boost
                productivity and reduce environmental impact across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Aboutimage />
      <Mission />
    </div>
  );
}

export default About;
