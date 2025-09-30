import React from 'react';
import approachImage from '../../assets/images/approachImage.png';
import sticker from '../../assets/icons/3d-sticker3.svg';
import sticker2 from '../../assets/icons/3d-sticker4.svg';
import { NavLink } from 'react-router-dom';

export default function Approach() {
	return (
		<div className="relative">
			<div className="  flex lg:flex-row flex-col-reverse justify-between pb-[95px] mt-[16px] lg:pt-[100px] gap-10 lg:px-[101px] px-[16px] mx-auto max-w-[1440px]">
				<img
					src={sticker}
					alt="background"
					className="lg:block hidden  absolute top-0 -left-[300px] opacity-25 h-[550px] w-[750px]   pointer-events-none"
				/>
				<img
					src={sticker2}
					alt="background"
					className="lg:block hidden absolute top-0 right-0     pointer-events-none"
				/>
				<div className="lg:w-1/2 w-full">
					<img
						src={approachImage}
						alt="approachImage"
					/>
				</div>
				<div className="lg:w-1/2 w-full flex flex-col justify-center">
					<h2 className="lg:text-[32px] lg:leading-[36px] leading-[32px] text-[20px] md:text-3xl font-playfair font-semibold text-[#182948] mb-3">
						Our Approach
					</h2>
					<h1 className="bg-[#ABC452] w-[120px] border-[3px] border-[#abc452] rounded-full"></h1>

					<p className="mt-5 text-[#555555] lg:text-[20px] text-[16px] leading-[36px] ">
						Founded with a passion for creating real, lasting impact, we work to
						equip women, youth, and marginalized communities with the tools and
						opportunities they need to thrive. Our work spans across skills
						acquisition, entrepreneurship development, health awareness,
						education support, and advocacy. We believe that when
						individuals-especially women and young people-are empowered,
						families and entire communities are transformed.
					</p>
					<NavLink to="/about">
						<button className="mt-8 inline-flex w-fit items-center px-4 py-3 bg-[#ABC452] text-[#445700] font-bold rounded-md ">
							Learn More
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
