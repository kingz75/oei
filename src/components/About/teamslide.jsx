import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// images
import sani from "../../assets/images/saniimage.png";
import hauwa from "../../assets/images/hauwaimage.png";
import zafirah from "../../assets/images/zaphimage.png";

const teamMembers = [
  { name: "Isah A Sani", role: "Chief Executive", image: sani },
  { name: "Hauwa Mohammed", role: "Team Member", image: hauwa },
  { name: "Zafirah Abubakar Ohunene", role: "Team Member", image: zafirah },
  { name: "Hauwa Mohammed", role: "Team Member", image: hauwa },
  { name: "Zafirah Abubakar Ohunene", role: "Team Member", image: zafirah },
];

export default function Teamslide() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [isMobile]);

  return (
    <section className="py-12  lg:px-[120px] relative">
      <Swiper
        modules={[Navigation, Autoplay, FreeMode]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        freeMode={isMobile ? { enabled: true } : { enabled: false }} // ✅ Swiper 11 syntax
        autoplay={
          isMobile
            ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
            : false
        }
        speed={isMobile ? 5000 : 600}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-12"
      >
        {teamMembers.map((member, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center text-center">
              <img src={member.image} alt={member.name} />
              <h3 className="mt-4 font-semibold text-lg text-[#182948]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#555555]">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && (
        <>
          <div className="hidden sm:block absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-10">
            <button
              ref={prevRef}
              aria-label="Previous"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden sm:block absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10">
            <button
              ref={nextRef}
              aria-label="Next"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
