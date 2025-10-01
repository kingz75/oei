import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import sticker from "../../assets/icons/3d-Sticker.svg";
import { NavLink } from "react-router-dom";

import "swiper/css";

import slide1 from "../../assets/images/heroComponent1.jpg";
import slide2 from "../../assets/images/heroComponent2.jpg";
import slide3 from "../../assets/images/heroComponent3.jpg";
import slide1M from "../../assets/images/heroComponentMobile1.jpg";
import slide2M from "../../assets/images/heroComponentMobile2.jpg";
import slide3M from "../../assets/images/heroComponentMobile3.jpg";

import Icon1 from "../../assets/icons/frame-1.svg";
import Icon2 from "../../assets/icons/frame-2.svg";
import Icon3 from "../../assets/icons/frame-3.svg";

const slides = [
  {
    image: slide1,
    imageM: slide1M,
    title: "Enabling communities\nfor a better nation",
    button: "Be a Volunteer",
  },
  {
    image: slide2,
    imageM: slide2M,
    title: "Women & Youth\nEmpowerment",

    button: "Be a Volunteer",
  },
  {
    image: slide3,
    imageM: slide3M,
    title: "Drug Abuse Prevention\nRehabilitation",
    button: "Be a Volunteer",
  },
];

const cards = [
  {
    icon: Icon1,
    text: "To create a society free from drug abuse, where individuals, families, and communities thrive in a healthy, empowered and supportive environment.",
  },
  {
    icon: Icon2,
    text: "Empowering individual community to prevent drug abuse, foster a healthier society by promoting a positive lifestyle.",
  },
  {
    icon: Icon3,
    text: "Our commitment to innovation allows us to create impactful programs that promise awareness, prevention of drug abuse.",
  },
];

const imageVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 1, ease: "easeIn" },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeIn" } },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="w-full">
      <section
        className="w-full min-h-screen bg-[#111111] overflow-visible relative"
        id="home"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={`slide-${index}-${activeIndex}`}
                    className="relative w-full min-h-screen flex flex-col"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="lg:block hidden absolute inset-0 w-full h-full object-cover  z-0"
                      style={{ height: "calc(100vh + 300px)" }}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />
                    <motion.img
                      src={slide.imageM}
                      alt={`Slide ${index + 1}`}
                      className="block lg:hidden absolute inset-0 w-full h-full object-cover  z-0"
                      style={{ height: "calc(100vh + 300px)" }}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />

                    <div
                      className="absolute inset-0 bg-black/20 z-10"
                      style={{ height: "calc(100vh + 300px)" }}
                    ></div>

                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="relative z-20 flex items-center  pt-[100px] justify-center text-center h-screen px-6 lg:px-0"
                    >
                      <div>
                        <h2 className="text-white text-[36px] lg:text-[60px] font-playfair lg:px-[0px] px-[16px] font-bold mb-6 lg:whitespace-pre-line lg:leading-[70px] leading-[54px]">
                          {slide.title}
                        </h2>
                        <NavLink to="/donate">
                          <button className="bg-[#ABC452] text-[16px] text-[#445700]  px-4 py-3 rounded-md font-bold">
                            {slide.button}
                          </button>
                        </NavLink>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative z-20 w-full py-8 "
                    >
                      <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {cards.map((card, i) => (
                          <motion.div
                            key={i}
                            variants={cardItemVariants}
                            className="bg-[#182948] relative p-6 rounded-xl flex flex-col  gap-4"
                          >
                            <img
                              src={sticker}
                              alt="background"
                              className="absolute top-0 right-0 w-[200px] h-[200px] object-contain  pointer-events-none"
                            />
                            <img
                              src={card.icon}
                              alt={`icon-${i}`}
                              className="w-[48px] h-[48px] object-contain"
                            />
                            <p className="text-[#ffffff] text-[12px] text-left">
                              {card.text}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="md:hidden">
                        <div className="w-full px-3">
                          <motion.div
                            key={`mobile-card-${activeIndex}`}
                            variants={cardItemVariants}
                            className="relative bg-[#182948] p-[20px] rounded-lg shadow flex flex-col gap-4 overflow-hidden"
                          >
                            <img
                              src={sticker}
                              alt="background"
                              className="absolute top-0 right-0 w-[150px] h-[150px] object-contain  pointer-events-none"
                            />

                            <img
                              src={cards[activeIndex]?.icon}
                              alt={`icon-${activeIndex}`}
                              className="w-[38px] h-[38px] object-contain text-left relative z-10"
                            />
                            <p className="text-white text-[10px] font-medium text-left relative z-10">
                              {cards[activeIndex]?.text}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
