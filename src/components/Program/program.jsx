import React, { useState } from "react";
import { Link } from "react-router-dom";
import Impact from "../Program/impact.jsx";

function Program() {
  const [showMore, setShowMore] = useState(false);

  const programs = [
    {
      id: 1,
      label: "DRUG ABUSE PREVENTION",
      title: "Walk Away From Drugs",
      description:
        "A multimedia campaign targeting secondary schools and universities across Nigeria, using drama, storytelling, social media, and real-life testimonials to educate youths on the dangers of drug abuse and how to seek help.",
      image: "/back/proimage1.jpg",
      mobileImage: "/back/proimage1m.jpg",
    },
    {
      id: 2,
      label: "WOMEN EMPOWERMENT",
      title: "Medical Outreach",
      description:
        "Provide rural women with access to small loans, savings groups, and business development training. The project also includes financial literacy and cooperative formation to scale impact and sustainability.",
      image: "/back/proimage2.jpg",
      mobileImage: "/back/proimage2m.jpg",
    },
    {
      id: 3,
      label: "SKILL ACQUISITION",
      title: "International Day Against Drug Abuse",
      description:
        "Deploy mobile clinics to rural and underserved communities to offer free medical checkups, maternal care, vaccinations, and health education. Services will include basic lab tests and referrals.",
      image: "/back/proimage3.jpg",
      mobileImage: "/back/proimage3m.jpg",
    },
    {
      id: 4,
      label: "CHILD EDUCATION",
      title: "Creatives Lab",
      description:
        "Provide rural women with access to small loans, savings groups, and business development training. The project also includes financial literacy and cooperative formation to scale impact and sustainability.",
      image: "/back/proimage4.jpg",
      mobileImage: "/back/proimage4m.jpg",
    },
  ];

  const extraPrograms = [
    {
      id: 5,
      label: "YOUTH DEVELOPMENT",
      title: "Leadership Workshop",
      description:
        "Train youths in leadership skills, teamwork, and career guidance.",
      image: "/back/proimage5.png",
      mobileImage: "/back/proimage5m.png",
    },
    {
      id: 6,
      label: "ENVIRONMENT",
      title: "Clean-Up Campaign",
      description:
        "Engage communities in environmental awareness and clean-up activities.",
      image: "/back/proimage6.png",
      mobileImage: "/back/proimage6m.png",
    },
  ];

  const getBackgroundImage = (program) =>
    window.innerWidth >= 1024 ? program.image : program.mobileImage;

  const allPrograms = showMore ? [...programs, ...extraPrograms] : programs;

  return (
    <div>
      <section className="bg-[url('/src/assets/back/aboutbg.png')] bg-no-repeat font-dmSans">
        <div className="lg:pt-[120px] pt-[90px] lg:px-[120px] px-[16px] lg:mb-[75p] mb-[32px] ">
          {/* Section Header */}
          <div className="text-center lg:mb-[60px] mb-[32px]">
            <h1 className="lg:text-[32px] text-[24px] font-bold text-[#182948] lg:mb-[20px] mb-[10px] font-playfair">
              Programmes & Initiatives
            </h1>
            <div className="lg:text-[20px] md:text-lg sm:text-base text-sm text-[#555555] lg:leading-[36px] md:leading-8 leading-6 max-w-4xl mx-auto">
              We are dedicated to making a positive and lasting impact on the
              lives of individuals and Communities.
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-[16px] lg:gap-y-[60px] flex-wrap">
            {allPrograms.map((program) => (
              <Link
                key={program.id}
                to={`/program/${program.id}`}
                state={program}
                className="rounded-xl flex flex-col justify-between w-full lg:w-[49.2%] min-h-[350px] lg:min-h-[450px] md:min-h-[350px] bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getBackgroundImage(program)})`,
                }}
              >
                <div className="lg:mt-[40px] md:mt-8 mt-6 lg:px-8 md:px-6 px-4">
                  <span className="bg-[#ABC452] text-[#ffffff] lg:text-[16px] md:text-sm text-xs font-bold font-playfair lg:px-6 md:px-5 px-4 lg:py-3 md:py-2 py-2 rounded-md inline-block">
                    {program.label}
                  </span>
                </div>
                <div className="lg:pb-[20px] md:pb-4 pb-3 lg:px-8 md:px-6 px-4">
                  <h2 className="text-[#ffffff] lg:text-[32px] text-[24px] font-medium mb-2 font-playfair">
                    {program.title}
                  </h2>
                  <p className="text-[14px] leading-[22px] text-[#ffffff] font-semibold">
                    {program.description.substring(0, 100)}...
                  </p>
                  <span className="underline text-sm text-[#ABC452]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="text-center lg:mt-[60px] mt-[32px]">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#ABC452] hover:bg-[#8CA53B] text-[#182948] font-bold px-6 py-3 rounded-md transition-colors text-center"
            >
              {showMore ? "View Less" : "View More"}
            </button>
          </div> */}
        </div>
      </section>
      <Impact />
    </div>
  );
}

export default Program;
