import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import zitajm from "../../assets/images/zitajm.png";
import sufpaym from "../../assets/images/sufpaym.png";
import agrom from "../../assets/images/agrom.png";
import clothm from "../../assets/images/clothm.png";

const mobileProjects = [
  {
    title: "Automobile",
    image: zitajm,
    link: "https://zitajautomobile.com",
    domain: "Zitajautomobile.com",
  },
  {
    title: "Fintech",
    image: sufpaym,
    link: "https://sufpay.com",
    domain: "Sufpay.com",
  },
  {
    title: "Agriculture",
    image: agrom,
    link: "https://greenworldagro.com",
    domain: "Greenworldagro.com",
  },
  {
    title: "E-Commerce",
    image: clothm,
    link: "https://azbirclothing.com",
    domain: "Azbirclothing.com",
  },
];

function Aboutmobile() {
  return (
    <div className="lg:hidden bg-[url('/src/assets/back/workbgm.png')] pt-[110px] px-[16px] text-center pb-[30px]">
      <div className="font-extrabold text-[32px] text-white mb-[38px]">
        Some Of Our Work
      </div>

      {mobileProjects.map((project, index) => (
        <div
          key={index}
          className="bg-[url('/src/assets/back/worksm.png')] bg-cover px-[16px] pt-[32px] rounded-[32px] mt-[40px]"
        >
          <div className="flex justify-between mb-[20px]">
            <div className="font-extrabold text-[20px] text-white">
              {project.title}
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-[#202020] p-2 rounded-full">
                <HiOutlineLink className="text-white text-sm" />
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4460FF] font-semibold text-[16px]"
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
  );
}

export default Aboutmobile;
