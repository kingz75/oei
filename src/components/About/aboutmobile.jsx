import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { motion } from "framer-motion";
import zitajm from "../../assets/images/zitajm.png";
import sufpaym from "../../assets/images/sufpaym.png";
import agrom from "../../assets/images/agrom.png";
import clothm from "../../assets/images/clothm.png";

const mobileProjects = [
  {
    title: "Automobile",
    image: zitajm,
    link: "https://zitajautomobile.com",
    domain: "Zitajautomobile",
  },
  {
    title: "Fintech",
    image: sufpaym,
    link: "https://sufpay.com",
    domain: "SufPay",
  },
  {
    title: "Agriculture",
    image: agrom,
    link: "https://greenworldagro.com",
    domain: "Greenworldagrotrade",
  },
  {
    title: "E-Commerce",
    image: clothm,
    link: "https://azbirclothing.com",
    domain: "Azbirclothing",
  },
];

function Aboutmobile() {
  return (
    <div className="lg:hidden bg-[url('/src/assets/back/workbgm.png')] pt-[110px] px-[16px] text-center pb-[30px]">
      <motion.h2
        className="font-extrabold text-[32px] text-white mb-[38px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Some Of Our Work
      </motion.h2>

      {mobileProjects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[url('/src/assets/back/worksm.png')] bg-cover px-[16px] pt-[32px] rounded-[32px] mt-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="grid place-items-center"
          >
            <img
              src={project.image}
              alt={`${project.title} project`}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default Aboutmobile;
