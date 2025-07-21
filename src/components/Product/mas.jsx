import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import your images here
import pd1 from "../../assets/images/pd1.png";
import pd2 from "../../assets/images/pd2.png";
import pd3 from "../../assets/images/pd3.png";
import abicon from "../../assets/icons/abicon.svg";

function Mas() {
  return (
    <section className=" bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover lg:py-[90px] py-[50px] lg:px-[101px] px-[16px]">
      <div className=" ">
        {/* Title */}
        <div className="flex  lg:pb-10 pb-[10px]">
          <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl md:text-4xl font-medium">
            <span className="relative z-10">
              Mechanized Agricultural Services
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[355px] lg:w-[520px] h-1.5 bg-[#E9AD3D] rounded-full"></span>
          </div>
        </div>

        {/* Intro Paragraph */}
        <p className="lg:mb-8 lg:text-[20px] text-[16px] leading-[28px] lg:leading-[36px] lg:w-[95%] lg:mt-0 mt-[20px]">
          Through our technical partners, Techgen Agro Consults, we provide
          comprehensive mechanized agricultural solutions and services tailored
          to modern farming needs. Our offerings include the supply and support
          of a wide range of advanced agricultural machinery and equipment, such
          as:
        </p>

        <div className=" lg:flex lg:gap-[40px] ga ">
          <div className="lg:w-[50%] pt-[60px]  lg:text-[20px] text-[16px] lg:leading-[36px] leading-[28px]  lg:space-y-6 space-y-4">
            <div className="flex items-start gap-2">
              <img src={abicon} alt="" />
              <p>
                Solar-powered irrigation pumps and various sustainable
                irrigation systems (e.g., drip and sprinkler systems) for
                efficient water management
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={abicon} alt="" />
              <p>
                {" "}
                Tractors, harvesters, planters, transplanting machinery, and
                precision agriculture tools (e.g., GPS-guided equipment and
                drones) for optimized farming operations
              </p>
            </div>

            <div className="flex items-start gap-2">
              <img src={abicon} alt="" />
              <p>
                Automatic rice nursery seedling machinery and precision sowing
                equipment for high-precision rice cultivation
              </p>
            </div>

            <div className="flex items-start gap-2">
              <img src={abicon} alt="" />
              <p>
                Additional machinery for soil preparation, crop monitoring, and
                post-harvest processing to enhance productivity across the
                agricultural value chain
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex  lg:gap-[12px] gap-[5px] lg:mt-0 mt-[40px]">
            <div>
              <img
                src={pd1}
                alt="Silos and storage equipment"
                className="rounded-lg lg:w-full  object-cover"
              />
            </div>
            <div>
              <img
                src={pd2}
                alt="Large agricultural machinery"
                className="rounded-lg lg:w-full  object-cover"
              />
              <img
                src={pd3}
                alt="Rice harvester operating in the field"
                className="rounded-lg lg:w-full  object-cover lg:mt-[10px] mt-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <p className="lg:mt-[70px] mt-[40px] lg:mb-[32px] lg:text-[20px] lg:leading-[36px] leading-[28px] lg:w-[95%]">
          Through our technical partners, Techgen Agro Consults, we provide
          comprehensive mechanized agricultural solutions and services tailored
          to modern farming needs. Our offerings include the supply and support
          of a wide range of advanced agricultural machinery and equipment, such
          as:
        </p>

        {/* Button */}
        <motion.div
          className=""
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="inline-block text-sm sm:text-base lg:text-[16px] font-semibold px-6 py-3 bg-[#174B24] text-white rounded hover:bg-green-800 transition rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] mt-[32px] lg:mt-0"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Mas;
