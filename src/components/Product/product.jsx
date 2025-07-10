import React from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import picon from "../../assets/icons/picon.svg";

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
    title: "Other Agro Products",
    image: p5,
    alt: "Other Agro Products",
    bullets: [
      "We also trade a range of other high quality agricultural commodities tailored to client needs.",
    ],
  },
];

function About() {
  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover px-[101px] py-[101px]">
      <div>
        <div className="flex justify-center pb-[40px] ">
          <div className="relative inline-block text-[#182948] text-[32px] font-medium">
            <span className="relative z-10">Our Product</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[150px] h-[6px] bg-[#E9AD3D] rounded-full"></span>
          </div>
        </div>

        {PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className={`flex items-center gap-[40px] pb-[55px] ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-[50%]">
              <div className="absolute top-[-105px] opacity-[12%] text-[128px] font-medium text-[#182948]">
                {product.id}
              </div>
              <div className="text-[24px] mb-[19px] font-medium text-[#182948]">
                {product.title}
              </div>
              <div className="text-[20px] text-[#555555]">
                {product.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 ${
                      idx !== product.bullets.length - 1 ? "mb-[19px]" : ""
                    } leading-[36px]`}
                  >
                    <img src={picon} alt="bullet icon" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] w-[50%]">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
