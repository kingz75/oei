import React from "react";
import { useParams, Link } from "react-router-dom";

// This is temporary program data (same as in Program.jsx)
// Later we can move it into a separate file so both pages share it.
const programs = [
  {
    id: 1,
    label: "DRUG ABUSE PREVENTION",
    title: "Walk Away From Drugs",
    description:
      "A multimedia campaign targeting secondary schools and universities across Nigeria, using drama, storytelling, social media, and real-life testimonials to educate youths on the dangers of drug abuse and how to seek help.",
    image: "/back/proimage1.png",
  },
  {
    id: 2,
    label: "WOMEN EMPOWERMENT",
    title: "Medical Outreach",
    description:
      "Provide rural women with access to small loans, savings groups, and business development training. The project also includes financial literacy and cooperative formation to scale impact and sustainability.",
    image: "/back/proimage2.png",
  },
  {
    id: 3,
    label: "SKILL ACQUISITION",
    title: "International Day Against Drug Abuse",
    description:
      "Deploy mobile clinics to rural and underserved communities to offer free medical checkups, maternal care, vaccinations, and health education. Services will include basic lab tests and referrals.",
    image: "/back/proimage3.png",
  },
  {
    id: 4,
    label: "CHILD EDUCATION",
    title: "Creatives Lab",
    description:
      "Provide rural women with access to small loans, savings groups, and business development training. The project also includes financial literacy and cooperative formation to scale impact and sustainability.",
    image: "/back/proimage4.png",
  },
  {
    id: 5,
    label: "YOUTH DEVELOPMENT",
    title: "Leadership Workshop",
    description:
      "Train youths in leadership skills, teamwork, and career guidance.",
    image: "/back/proimage5.png",
  },
  {
    id: 6,
    label: "ENVIRONMENT",
    title: "Clean-Up Campaign",
    description:
      "Engage communities in environmental awareness and clean-up activities.",
    image: "/back/proimage6.png",
  },
];

function ProgramDetail() {
  const { id } = useParams(); // get the program id from the URL
  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <h2 className="text-center py-20">Program not found</h2>;
  }

  return (
    <section className="pt-[120px] px-[16px] lg:px-[120px] mb-[75px]">
      <div className="max-w-4xl mx-auto">
        <img
          src={program.image}
          alt={program.title}
          className="w-full rounded-xl mb-6"
        />
        <span className="bg-[#ABC452] text-white px-4 py-2 rounded-md text-sm font-bold">
          {program.label}
        </span>
        <h1 className="text-3xl font-bold text-[#182948] mt-4 mb-4">
          {program.title}
        </h1>
        <p className="text-[#555] text-lg leading-7 mb-6">
          {program.description}
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
