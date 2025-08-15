import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { motion } from "framer-motion";
import zitaj from "../../assets/images/zitaj.png";
import sufpay from "../../assets/images/sufpay.png";
import agro from "../../assets/images/agro.png";
import cloth from "../../assets/images/cloth.png";
import Aboutmobile from "../Ourwork/aboutmobile.jsx";
import hamzville from "../../assets/images/hamzville.png";
import bryana from "../../assets/images/bryana.png";
import fortunz from "../../assets/images/fortunz.png";

const projects = [
  {
    title: "Automobile",
    image: zitaj,
    link: "https://zitajautomobile.com",
    domain: "Zitajautomobile",
  },
  {
    title: "Cleaning Service",
    image: hamzville,
    link: "https://hamzville.com",
    domain: "Hamzville",
  },
  {
    title: "Apartment",
    image: bryana,
    link: "https://bryanaresort.com",
    domain: "Bryanaresort",
  },
  {
    title: "Fintech",
    image: sufpay,
    link: "https://sufpay.ng",
    domain: "SufPay",
  },
  {
    title: "E-Commerce",
    image: fortunz,
    link: "https://fortunezakprints.com",
    domain: "Fortunezakprints",
  },
  {
    title: "Agriculture",
    image: agro,
    link: "https://greenworldagrotrade.com",
    domain: "Greenworldagrotradtrade",
  },
  {
    title: "E-Commerce",
    image: cloth,
    link: "https://azbirclothing.com",
    domain: "Azbirclothing",
  },
];

function Ourwork() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:block bg-cover bg-center py-[120px] px-[80px] bg-[url('/src/assets/back/workbg.png')]">
        <motion.h2
          className="text-[64px] font-extrabold text-white mb-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Some Of Our Work
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-cover bg-[url('/src/assets/back/works.png')] px-[48px] pt-[60px] rounded-[32px] mt-[40px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
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
            <motion.div
              className="grid place-items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <Aboutmobile />
    </div>
  );
}

export default Ourwork;
