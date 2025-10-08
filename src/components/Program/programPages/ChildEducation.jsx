import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ChildEducation() {
  const program = {
    label: "CHILD EDUCATION",
    title: "Creatives Lab",
    summary:
      "At OEI, we believe that creativity and education go hand in hand in shaping the leaders of tomorrow. The Creatives Lab is a hub designed to empower children and young adults with artistic, digital, and problem-solving skills that prepare them for a brighter future.",
    summary1:
      "Through hands-on workshops and mentorship, participants learn how to express ideas, collaborate effectively, and turn creative concepts into impactful projects that benefit their communities.",
    summary2:
      "By combining education, innovation, and creativity, we’re building a generation that thinks critically, acts boldly, and contributes meaningfully to society.",
    images: ["/back/proimage4.jpg", "/back/proimage1.jpg"],
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
                  alt={`Creatives Lab ${i + 1}`}
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

export default ChildEducation;
