import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Updated program data
const programs = [
  {
    id: 1,
    label: "DRUG ABUSE PREVENTION",
    title: "Walk Away From Drugs Campaign",
    summary:
      "The Ohunene Empowerment Initiatives (OEI), in partnership with the NDLEA, NYSC Corps Members and passionate citizens across Kogi State, took to the streets in a powerful road walk and sensitization campaign.",
    summary1:
      "This movement was more than a march, it was a wake-up call to parents, guardians, youths and elders alike, highlighting the dangers of drug abuse and the urgent need to protect our future generations.",
    summary2:
      "Beyond fighting substance abuse, we walked to empower our youths, uplift women and advance child education. With the strong backing of the NDLEA, we declared with one voice:NO to drugs, YES to a brighter future! ",
    details: [],
    images: [
      "/back/pa1.png",
      "/back/pa2.png",
      "/back/pa3.png",
      "/back/pa4.png",
      "/back/pa5.png",
      "/back/pa6.png",
      "/back/pa7.png",
      "/back/pa8.png",
    ],
  },
  {
    id: 2,
    label: "WOMEN EMPOWERMENT",
    title: "Medical Outreach",
    summary:
      "At OEI, we believe true empowerment starts before birth. Our recent visit to the maternity ward wasn’t just a gesture, it was a commitment to mothers, children and the future.",
    summary3: "Through this outreach, we:",
    summary4:
      "Representing Hajiya Sefinat Usman Ododo, we also toured various wards, reaffirming our mission: to stand with women, children and youths from pregnancy, through safe delivery and beyond.",
    summary5:
      "Because every child deserves a healthy start, free from neglect and drug abuse. Together with parents, we can nurture a generation ready to lead, inspire and thrive.",
    summary6: "Let’s protect our future, one mother, one child at a time. ",
    details: [
      " Donated 100+ maternity packages",
      " Provided cash gifts and settled medical bills",
      "Referred patients to specialist hospitals for proper care",
      "Held a sensitization program to educate them about their health",
      " Support mothers before, during and after pregnancy",
      "Listened to the hospital’s needs and pledged continuous support",
    ],
    images: [
      "/back/pb1.png",
      "/back/pb2.png",
      "/back/pb3.png",
      "/back/pb4.png",
      "/back/pb5.png",
      "/back/pb6.png",
      "/back/pb7.png",
      "/back/pb8.png",
    ],
  },
  {
    id: 3,
    label: "SKILL ACQUISITION",
    title: "International Day Against Drug Abuse & Illicit Trafficking",
    summary:
      "Every year, the world comes together on June 26th to mark the fight against drug abuse, a day of awareness, action and hope for a drug-free life.",
    summary1:
      "This year, Ohunene Empowerment Initiative (OEI) in collaboration with the NDLEA brought Kogi State alive with a vibrant program featuring a road walk, drama, dance and sensitization campaign.",
    summary2:
      "We recognize that our youth are the future, yet drug abuse continues to threaten their health, steal their dreams and claim too many lives. That’s why we stand united with the NDLEA, the Pharmaceutical Society of Nigeria and other stakeholders to take drug abuse prevention to every corner of Kogi State.",
    summary3: "With one voice, we declared:",
    summary7: "NO to drugs.",
    summary8: "YES to life.",
    summary9:
      "Together, we are shaping a brighter, healthier future for our communities.",

    details: [],
    images: [
      "/back/pc1.png",
      "/back/pc2.png",
      "/back/pc3.png",
      "/back/pc4.png",
      "/back/pc5.png",
      "/back/pc6.png",
      "/back/pc7.png",
      "/back/pc8.png",
    ],
  },
  {
    id: 4,
    label: "CHILD EDUCATION",
    title: "Creatives Lab",
    summary:
      "Provide rural women with access to small loans, savings groups, and business development training. The project also includes financial literacy and cooperative formation to scale impact and sustainability.",
    details: [],
    images: ["/back/proimage4.png", "/back/proimage1.png"],
  },
  // ...rest
];

function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <h2 className="text-center py-20">Program not found</h2>;
  }

  return (
    <section className="pt-[120px] px-[16px] lg:px-[120px] mb-[75px]">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Swiper */}
        <div className="block lg:hidden mb-6 rounded-xl overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-xl"
          >
            {program.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${program.title} ${index + 1}`}
                  className="w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Swiper */}
        <div className="hidden lg:block mb-6 rounded-xl overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-xl "
          >
            {program.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${program.title} ${index + 1}`}
                  className="w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <span className="bg-[#ABC452] text-white px-4 py-2 rounded-md text-sm font-bold">
          {program.label}
        </span>
        <h1 className="text-3xl font-bold text-[#182948] mt-4 mb-4">
          {program.title}
        </h1>

        {/* Summary */}
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary1}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary2}</p>
        <p className="text-[#555] text-lg leading-7 mb-1">{program.summary3}</p>
        <p className="text-[#555] text-lg font-bold leading-7 mb-">
          {program.summary7}
        </p>
        <p className="text-[#555] text-lg font-bold leading-7 mb-4">
          {program.summary8}
        </p>
        <p className="text-[#555] text-lg leading-7 mb-1">{program.summary9}</p>

        {/* Bullet Points */}
        <ul className="list-disc pl-6 text-[#555] text-lg space-y-2 mb-6">
          {program.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* Summary continued */}
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary4}</p>
        <p className="text-[#555] text-lg leading-7 mb-4">{program.summary5}</p>
        <p className="text-[#555] font-bold text-lg leading-7 mb-6">
          {program.summary6}
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

export default ProgramDetail;
