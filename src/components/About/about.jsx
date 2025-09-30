import React from 'react';
import mission from '../../assets/icons/mission.svg';
import vision from '../../assets/icons/vision.svg';
import value from '../../assets/icons/value.svg';
import Ourstory from '../About/ourstory.jsx';
import Ourteam from '../About/ourteam.jsx';
import Teamslide from '../About/teamslide.jsx';

export default function AboutUs() {
	return (
		<section className="bg-[url('/src/assets/back/aboutbg.png')] bg-no-repeat bg-center bg-cover lg:px-[120px]  lg:pt-[170px] pt-[90px]">
			<div className="px-[16px] lg:px-0">
				{/* Mobile Heading */}
				<div className="lg:hidden">
					<div>
						<h2 className="text-[24px] font-medium text-[#182948]">About Us</h2>
						<div className="border-b-[7px] rounded-full w-[105px] border-[#ABC452]"></div>
					</div>
					<p className="text-[#555555] mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[36px] mb-[20px]">
						Ohunene Empowerment Initiative is a non-profit organization
						dedicated to uplifting lives through empowerment, education, and
						sustainable development
					</p>
				</div>

				{/* Flex Container */}
				<div className="flex flex-col lg:flex-row justify-between lg:gap-[40px] mb-[70px]">
					{/* Left Side - Image with Overlays */}
					<div className="bg-[url('/src/assets/back/abbg1.png')] rounded-xl bg-no-repeat bg-cover bg-center flex flex-col justify-between h-[90vh] lg:h-auto">
						{/* Top Label */}
						<div className="lg:mt-[40px] lg:px-8 mt-[30px] px-4">
							<span className="bg-[#ABC452] text-[#ffffff] text-[16px] font-bold px-6 py-3 rounded-md">
								ABOUT US
							</span>
						</div>
						{/* Bottom Write-up */}
						<div className="pb-[20px] lg:px-8 px-4">
							<p className="lg:text-[20px] lg:leading-[36px] text-[16px] leading-[32px] text-[#ffffff] font-medium">
								Founded with a passion for creating real, lasting impact, we
								work to equip women, youth, and marginalized communities with
								the tools and opportunities they need to thrive.
							</p>
						</div>
					</div>

					{/* Right Side */}
					<div>
						{/* Desktop Heading */}
						<div className="text-center hidden lg:block">
							<div className="place-items-center">
								<h2 className="text-[32px] font-medium text-[#182948]">
									About Us
								</h2>
								<div className="border-b-[7px] rounded-full w-[150px] border-[#ABC452]"></div>
							</div>
							<p className="text-[#555555] mt-5 text-center text-[20px] leading-[36px] mb-[40px]">
								Ohunene Empowerment Initiative is a non-profit organization
								dedicated to uplifting lives through empowerment, education, and
								sustainable development
							</p>
						</div>

						{/*  Mission, Vision, Values */}
						<div className="lg:bg-[url('/src/assets/back/abbg2.png')] bg-[url('/src/assets/back/abbgm2.png')] bg-no-repeat bg-cover bg-center py-8 px-4 rounded-2xl lg:mt-0 mt-[20px] space-y-8">
							{/* Mission */}
							<div>
								<div className="mb-3">
									<img
										src={mission}
										alt=""
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-3">
										OUR MISSION
									</h3>
								</div>
								<p className="text-[#FFFFFF] text-[14px] lg:text-[16px] lg:leading-normal leading-[32px]">
									We empower communities to prevent drug abuse and promote a
									healthy society by encouraging positive lifestyles, building
									state-of-the-art facilities, and equipping youth, women, and
									children with essential skills, resources, and opportunities
									that foster resilience, awareness, and long-term support for
									sustainable well-being.
								</p>
							</div>

							{/* Vision */}
							<div>
								<div className="mb-3">
									<img
										src={vision}
										alt=""
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-3">
										OUR VISION
									</h3>
								</div>
								<p className="text-[#FFFFFF] text-[14px] lg:text-[16px] lg:leading-normal leading-[32px]">
									We envision a society free from drug abuse, where individuals,
									families, and communities thrive in healthy, empowered, and
									nurturing environments. Our goal is a future where every
									person has equal access to knowledge, support systems, and the
									tools to lead a fulfilled and drug-free life.
								</p>
							</div>

							{/* Values */}
							<div>
								<div className="mb-3">
									<img
										src={value}
										alt=""
									/>
									<h3 className="text-[16px] text-[#FFFFFF] font-medium mt-3">
										OUR VALUES
									</h3>
								</div>
								<p className="text-[#FFFFFF] text-[14px] lg:text-[16px] lg:leading-normal leading-[32px]">
									Driven by empowerment, integrity, and compassion, we ensure
									everyone receives the support they need to live a positive
									life. Through innovation, education, and impactful programs,
									we raise awareness, prevent drug abuse, and create lasting
									change that uplifts vulnerable individuals and strengthens
									entire communities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Ourstory />
			<Ourteam />
			<Teamslide />
		</section>
	);
}
