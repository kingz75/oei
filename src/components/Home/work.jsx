import React from "react";
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
          <div key={index} className="w-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
