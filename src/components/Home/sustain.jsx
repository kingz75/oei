import React from "react";
import { motion } from "framer-motion";
import sustain1 from "../../assets/images/sustain1.png";
import sustain2 from "../../assets/images/sustain2.png";
import sustain3 from "../../assets/images/sustain3.png";

function Sustain() {
  // Animation variants
  const getVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="bg-[url('/src/assets/back/sustainbg.png')] bg-center bg-cover lg:h-[716px] w-full lg:px-[101px] px-4 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="lg:text-center lg:pl-0 pl-2">
          <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
            SUSTAIN<span className="text-[#E9AD3D]">ABILITY</span>
          </h2>
          <p className="text-white mt-3 text-xs sm:text-sm lg:text-lg">
            We are committed to sustainable agricultural practices:
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-lg"
            variants={getVariants("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={sustain1}
              alt="Rice Husk Briquettes"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                Rice Husk Briquettes
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Utilizing rice byproducts for eco-friendly energy solutions,
                reducing waste, supporting green initiatives.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-lg"
            variants={getVariants("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={sustain2}
              alt="Traceable Supply Chains"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                Traceable Supply Chains
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Ensuring all products are sourced ethically and can be traced
                from farm to market.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-lg"
            variants={getVariants("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={sustain3}
              alt="Farmer Partnerships"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                Farmer Partnerships
              </h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Supporting rural communities and empowering farmers through fair
                trade practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Sustain;
