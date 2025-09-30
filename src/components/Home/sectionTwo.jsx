import rightHS from "../../assets/images/sectionTwoImage.jpg";
import sticker from "../../assets/icons/3d-sticker2.svg";
import { NavLink } from "react-router-dom";

export default function SectionTwo() {
  return (
    <div className=" relative mx-auto max-w-[1440px]  lg:px-[90px] px-[16px] lg:py-[50px] py-[50px]">
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
          <div>
            <img
              src={sticker}
              alt="background"
              className="absolute top-0 -left-10  object-contain  pointer-events-none"
            />
            <h2 className="lg:text-[32px] lg:leading-[36px] leading-[32px] text-[20px] md:text-3xl font-playfair font-semibold text-[#182948] mb-3">
              Empowering lives, transforming <br /> communities
            </h2>
            <h1 className="bg-[#ABC452] w-[120px] border-[3px] border-[#abc452] rounded-full"></h1>
            <p className="mt-5 text-[#555555] lg:text-[20px] text-[16px] leading-[36px]">
              Ohunene Empowerment Initiative is a non-profit organization
              committed to uplifting vulnerable women, youth, and children in
              Nigeria. Through a strategic blend of education, healthcare, and
              economic empowerment programs, we aim to break the cycle of
              poverty and create lasting opportunities for underserved
              communities.
            </p>

            <NavLink to="/program">
              <button className="mt-8 inline-flex items-center px-4 py-3 bg-[#ABC452] text-[#445700] font-bold rounded-md ">
                See Our Impact
              </button>
            </NavLink>
          </div>

          <div className="relative">
            <img
              src={rightHS}
              alt="Community impact"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
