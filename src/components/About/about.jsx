import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import zitaj from "../../assets/images/zitaj.png";
import sufpay from "../../assets/images/sufpay.png";
import agro from "../../assets/images/agro.png";
import cloth from "../../assets/images/cloth.png";
import Aboutmobile from "../About/aboutmobile.jsx";

const projects = [
  {
    title: "Automobile",
    image: zitaj,
    link: "https://zitajautomobile.com",
    domain: "Zitajautomobile.com",
  },
  {
    title: "Fintech",
    image: sufpay,
    link: "https://sufpay.com",
    domain: "Sufpay.com",
  },
  {
    title: "Agriculture",
    image: agro,
    link: "https://greenworldagro.com",
    domain: "Greenworldagro.com",
  },
  {
    title: "E-Commerce",
    image: cloth,
    link: "https://azbirclothing.com",
    domain: "Azbirclothing.com",
  },
];

function About() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block bg-cover bg-center py-[120px] px-[80px] bg-[url('/src/assets/back/workbg.png')]">
        <div className="text-[64px] font-extrabold text-white mb-[48px]">
          Some Of Our Work
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-cover bg-[url('/src/assets/back/works.png')] px-[48px] pt-[60px] rounded-[32px] mt-[40px]"
          >
            <div className="flex justify-between mb-[30px]">
              <div className="text-[40px] font-extrabold text-white">
                {project.title}
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLink className="text-white text-xl" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4460FF] font-semibold text-[24px]"
                >
                  {project.domain}
                </a>
              </div>
            </div>
            <div className="grid place-items-center">
              <img src={project.image} alt={`${project.title} project`} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <Aboutmobile />
    </div>
  );
}

export default About;
