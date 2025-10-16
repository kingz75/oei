import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function DrugAbuse() {
  const program = {
    label: "DRUG ABUSE PREVENTION",
    title: "Walk Away From Drugs Campaign",
    summary:
      "The Ohunene Empowerment Initiatives (OEI), in partnership with the NDLEA, NYSC Corps Members and passionate citizens across Kogi State, took to the streets in a powerful road walk and sensitization campaign.",
    summary1:
      "This movement was more than a march — it was a wake-up call to parents, guardians, youths, and elders alike, highlighting the dangers of drug abuse and the urgent need to protect our future generations.",
    summary2:
      "Beyond fighting substance abuse, we walked to empower our youths, uplift women, and advance child education. With the strong backing of the NDLEA, we declared with one voice:",
    summary3: " NO to drugs, YES to a brighter future!",

    images: [
      "/back/pa1.jpg",
      "/back/pa2.jpg",
      "/back/pa3.jpg",
      "/back/pa4.jpg",
      "/back/pa5.jpg",
      "/back/pa6.jpg",
      "/back/pa7.jpg",
      "/back/pa8.jpg",
    ],
  };

  return (
    <section className="pt-[120px] px-4 lg:px-[120px] mb-[75px] font-dmSans">
      <div className="max-w-4xl mx-auto">
        {/* Swiper */}
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
                  alt={`Drug Campaign ${i + 1}`}
                  className="w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <span className="bg-[#ABC452] text-white px-4 py-2 rounded-md text-sm font-bold font-playfair">
          {program.label}
        </span>

        <h1 className="text-3xl font-bold text-[#182948] mt-4 mb-4 font-playfair">
          {program.title}
        </h1>

        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary1}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary2}</p>
        <p className="text-[#555] text-lg leading-7 italic font-semibold mb-4">
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

export default DrugAbuse;
