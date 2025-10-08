import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SkillAcquisition() {
  const program = {
    label: "SKILL ACQUISITION",
    title: "International Day Against Drug Abuse & Illicit Trafficking",
    summary:
      "Every year, the world comes together on June 26th to mark the fight against drug abuse — a day of awareness, action, and hope for a drug-free life.",
    summary1:
      "This year, Ohunene Empowerment Initiative (OEI), in collaboration with the NDLEA, brought Kogi State alive with a vibrant program featuring a road walk, drama, dance, and sensitization campaign.",
    summary2:
      "We recognize that our youth are the future, yet drug abuse continues to threaten their health, steal their dreams, and claim too many lives. That’s why we stand united with the NDLEA, the Pharmaceutical Society of Nigeria, and other stakeholders to take drug abuse prevention to every corner of Kogi State.",
    summary3:
      "With one voice, we declared — NO to drugs. YES to life. Together, we are shaping a brighter, healthier future for our communities.",
    images: [
      "/back/pc1.jpg",
      "/back/pc2.jpg",
      "/back/pc3.jpg",
      "/back/pc4.jpg",
      "/back/pc5.jpg",
      "/back/pc6.jpg",
      "/back/pc7.jpg",
    ],
  };

  return (
    <section className="pt-[120px] px-4 lg:px-[120px] mb-[75px] font-dmSans">
      <div className="max-w-4xl mx-auto">
        {/* Swiper Section */}
        <div className="mb-6 rounded-xl overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="rounded-xl"
          >
            {program.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Skill Acquisition ${i + 1}`}
                  className="w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <span className="bg-[#ABC452] text-white px-4 py-2 rounded-md text-sm font-bold font-playfair">
          {program.label}
        </span>

        <h1 className="text-3xl font-bold text-[#182948] mt-4 mb-4 font-playfair">
          {program.title}
        </h1>

        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary1}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary2}</p>

        <p className="text-[#555] text-lg font-semibold italic leading-7 mb-6">
          {program.summary3}
        </p>

        <Link
          to="/program"
          className="bg-[#ABC452] hover:bg-[#8CA53B] text-[#182948] font-bold px-6 py-3 rounded-md"
        >
          ← Back to Programs
        </Link>
      </div>
    </section>
  );
}

export default SkillAcquisition;
