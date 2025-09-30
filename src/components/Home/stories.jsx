import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import sticker from "../../assets/icons/3d-sticker2.svg";
import sticker6 from "../../assets/icons/3d-sticker6.svg";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

import "swiper/css";
import "swiper/css/navigation";

const stories = [
  {
    title: "New Rehabilitation Center Opens for Drug-Dependent Youth",
    date: "10 May, 2025",
    description:
      "Our NGO inaugurated a new rehabilitation center in partnership with the state government. The center provides medical care, psychosocial support, and vocational training to help young people recovering from substance abuse reintegrate into society.",
  },
  {
    title: "Youth Empowerment Initiative Launches",
    date: "22 May, 2025",
    description:
      "We launched a youth empowerment program aimed at equipping young people with digital and entrepreneurial skills, creating pathways to sustainable employment and self-reliance.",
  },
  {
    title: "Community Outreach Expands to Rural Areas",
    date: "30 May, 2025",
    description:
      "Our outreach programs now cover remote villages, bringing healthcare, counseling, and educational support directly to vulnerable families who previously lacked access.",
  },
];

export default function Stories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const adjustHeights = () => {
    const cards = document.querySelectorAll(".story-card");
    let tallest = 0;
    cards.forEach((card) => {
      card.style.height = "auto";
      tallest = Math.max(tallest, card.offsetHeight);
    });
    cards.forEach((card) => (card.style.height = `${tallest}px`));
  };

  useEffect(() => {
    adjustHeights();
    window.addEventListener("resize", adjustHeights);
    return () => window.removeEventListener("resize", adjustHeights);
  }, [stories, swiperInstance]);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      setTimeout(() => {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      });
    }
  }, [swiperInstance]);

  return (
    <div className="w-full relative max-w-[1440px] py-[40px] mx-auto px-4 sm:px-8 md:px-[90px]">
      <div className="lg:mb-[40px] mb-[20px]">
        <img
          src={sticker}
          alt="background"
          className="absolute top-0 -left-10  object-contain  pointer-events-none"
        />
        <h1 className="mb-2 text-[24px] sm:text-[28px] md:text-[32px] text-[#182948] font-playfair font-medium">
          Stories that inspire
        </h1>
        <div className="w-[80px] sm:w-[100px] md:w-[120px] border-[3px] border-[#abc452] rounded-full"></div>
        <p className="pt-5 text-[16px] leading-[32px] text-[#555555] sm:text-[20px] sm:leading-[36px]">
          Stay up to date with our most recent news and accomplishments
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
        }}
        onSwiper={setSwiperInstance}
        onResize={adjustHeights}
        className="pb-16"
      >
        {stories.map((story, idx) => (
          <SwiperSlide key={idx} className="flex items-stretch">
            <div className=" bg-[#F7F9FC] relative rounded-xl p-6 sm:p-6 flex flex-col h-[400px]">
              <img
                src={sticker6}
                alt="background"
                className="absolute top-0 right-0 object-contain  pointer-events-none"
              />
              <h1 className="font-playfair font-semibold text-[20px] sm:text-[24px] leading-[36px] mb-2 text-[#182948] text-left">
                {story.title}
              </h1>
              <p className="text-[16px] leading-[36px] text-[#555555] mb-6 text-left">
                {story.date}
              </p>
              <p className="text-[16px] sm:text-[20px] sm:leading-[36px] leading-[28px] text-[#555555] text-left">
                {story.description}
              </p>
              <div className="flex-grow"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex lg:justify-start justify-between gap-4 mt-10">
        <button ref={prevRef} className=" flex items-center justify-center">
          <img src={left} alt="left" className="h-[70px] w-[70px]" />
        </button>
        <button ref={nextRef} className=" flex items-center justify-center">
          <img src={right} alt="right" className="h-[70px] w-[70px]" />
        </button>
      </div>
    </div>
  );
}
