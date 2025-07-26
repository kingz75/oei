import React from "react";
import { motion } from "framer-motion";
import commerce from "../../assets/images/commerce.png";
import fintech from "../../assets/images/fintech.png";
import auto from "../../assets/images/auto.png";
import agri from "../../assets/images/agri.png";

function Work() {
  const images = [
    { src: commerce, alt: "E-commerce project" },
    { src: fintech, alt: "Fintech project" },
    { src: auto, alt: "Automotive project" },
    { src: agri, alt: "Agritech project" },
  ];

  return (
    <div className="pt-[40px] lg:pt-[70px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-xl shadow-xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
