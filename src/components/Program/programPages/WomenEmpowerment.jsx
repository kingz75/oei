import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function WomenEmpowerment() {
  const program = {
    label: "WOMEN EMPOWERMENT",
    title: "Medical Outreach",
    summary:
      "At OEI, we believe true empowerment starts before birth. Our recent visit to the maternity ward wasn’t just a gesture — it was a commitment to mothers, children, and the future.",
    summary2:
      "Representing Hajiya Sefinat Usman Ododo, we also toured various wards, reaffirming our mission: to stand with women, children, and youths from pregnancy through safe delivery and beyond.",
    summary3:
      "Representing Hajiya Sefinat Usman Ododo, we also toured various wards, reaffirming our mission: to stand with women, children and youths from pregnancy, through safe delivery and beyond.",
    summary4:
      "Because every child deserves a healthy start, free from neglect and drug abuse. Together with parents, we can nurture a generation ready to lead, inspire and thrive.",
    summary5: "Let’s protect our future, one mother, one child at a time. ",
    details: [
      "Donated 100+ maternity packages",
      "Provided cash gifts and settled medical bills",
      "Referred patients to specialist hospitals for proper care",
      " Held a sensitization program to educate them about their health",
      "Support mothers before, during and after pregnancy",
      "Listened to the hospital’s needs and pledged continuous support",
    ],
    images: ["/back/pb1.png", "/back/pb2.png", "/back/pb3.png"],
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
                  alt={`Medical Outreach ${i + 1}`}
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
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary2}</p>

        <ul className="list-disc pl-6 text-[#555] text-lg space-y-2 mb-6">
          {program.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary3}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary4}</p>
        <p className="text-[#555] text-lg leading-7 italic font-semibold mb-4">
          {program.summary5}
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

export default WomenEmpowerment;
