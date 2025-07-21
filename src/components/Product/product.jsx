import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Mas from "../Product/mas.jsx";
import Ourproduct from "../Product/ourproduct.jsx";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const slides = [slide1, slide2, slide3];

function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideshowRef = useRef();

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };

  // Handle transition end for infinite loop
  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  const slideImages = [...slides, slides[0]]; // Add cloned first slide at end

  return (
    <div>
      <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover lg:pt-[101px] pt-[90px] lg:px-[101px] px-[0px]">
        {/* Slideshow Container */}
        <div className="overflow-hidden w-full py-8">
          <div
            ref={slideshowRef}
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slideImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[50%] lg:w-full px-2"
              >
                <motion.img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-xl object-cover"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Ourproduct />
      <Mas />
    </div>
  );
}

export default Product;
