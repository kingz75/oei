import React from "react";
import { motion } from "framer-motion";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import picon from "../../assets/icons/picon.svg";
import Mas from "../Product/mas.jsx";

const PRODUCTS = [
  {
    id: "01",
    title: "Premium Rice and Byproducts",
    image: p1,
    alt: "Premium Rice and Byproducts",
    bullets: [
      "High-quality rice processed under strict quality controls from Nigeria’s fertile regions.",
      "Value-added byproducts including broken rice for animal feed and rice husk briquettes for sustainable energy solutions.",
    ],
  },
  {
    id: "02",
    title: "Hibiscus Flower",
    image: p2,
    alt: "Hibiscus Flower",
    bullets: [
      "Sourced from certified organic farms, our hibiscus flowers are organic, pesticide-free, and comply with international quality certifications.",
      "Ideal for export and local markets, used in beverages, health products, and culinary applications.",
    ],
  },
  {
    id: "03",
    title: "Sesame Seeds",
    image: p3,
    alt: "Sesame Seeds",
    bullets: [
      "We trade high-purity white sesame seeds with excellent moisture content, suitable for bakery, oil extraction, and culinary uses.",
      "Our sesame seeds meet stringent quality standards and are sourced from trusted suppliers in the international markets.",
    ],
  },
  {
    id: "04",
    title: "Soya Beans",
    image: p4,
    alt: "Soya Beans",
    bullets: [
      "Premium-grade non-GMO soya beans known for their high protein content and versatility in food and livestock feed industries.",
      "We ensure consistent supply and quality, catering to diverse market demands in the UAE and beyond.",
    ],
  },
  {
    id: "05",
    title: "Ginger",
    image: p5,
    alt: "Ginger",
    bullets: [
      "High-quality ginger sourced from trusted suppliers, ideal for culinary, medicinal, and industrial applications.",
      "Our ginger meets international quality standards, ensuring freshness and potency.",
    ],
  },
  {
    id: "06",
    title: "Other Agro Products",
    image: p6,
    alt: "Other Agro Products",
    bullets: [
      "We also trade a range of other high quality agricultural commodities tailored to client needs.",
    ],
  },
];

function Ourproduct() {
  return (
    <div>
      <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover px-4 pb-[0px] pt-[10px] sm:px-8 md:px-16 lg:px-[101px] lg:pt-[70px]">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="flex justify-center pb-10">
            <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl md:text-4xl font-medium">
              <span className="relative z-10">Our Product</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 sm:w-36 md:w-[150px] h-1.5 bg-[#E9AD3D] rounded-full"></span>
            </div>
          </div>

          {/* Product blocks */}
          {PRODUCTS.map((product, index) => {
            const slideDirection = index % 2 === 0 ? -100 : 100;

            return (
              <div
                key={product.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-10 pb-[50px]`}
              >
                {/* Text content */}
                <div className="relative md:w-1/2 w-full">
                  <div className="absolute lg:-top-14  -top-6 opacity-10 text-6xl sm:text-7xl md:text-8xl font-medium text-[#182948]">
                    {product.id}
                  </div>
                  <div className="text-[24px] mb-4 font-medium text-[#182948]">
                    {product.title}
                  </div>
                  <div className="text-[16px] lg:text-[20px] sm:text-lg text-[#555555]">
                    {product.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 sm:gap-3 ${
                          idx !== product.bullets.length - 1 ? "mb-4" : ""
                        } leading-[28px] lg:leading-[36px]`}
                      >
                        <img
                          src={picon}
                          alt="bullet icon"
                          className="w-4 sm:w-5 mt-1"
                        />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Image */}
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [0, window.innerWidth >= 768 ? slideDirection : 0, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-auto lg:rounded-tl-[150px] lg:rounded-br-[150px]  rounded-[20px]
                  object-cover"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ourproduct;
