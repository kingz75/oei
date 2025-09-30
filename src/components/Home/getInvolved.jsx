import React from 'react';
import getInvolvedImage from '../../assets/images/getInvolved.png';
import getInvolvedMobile from '../../assets/images/getInvolvedMobile.png';
import { NavLink } from 'react-router-dom';

export default function GetInvolved() {
	return (
		<div>
			<div
				className="lg:h-[791px] h-[472px] w-full bg-cover bg-center flex flex-col justify-center lg:px-[120px] px-[16px]"
				style={{
					backgroundImage: `url(${
						window.innerWidth >= 1024 ? getInvolvedImage : getInvolvedMobile
					})`,
				}}
			>
				<div className="w-[100%] lg:w-[40%]">
					<h1 className="text-[#ffffff] font-playfair text-[32px] lg:text-[64px] font-bold leading-[32px] lg:leading-[83px]">
						Brighter <br /> Future
					</h1>
					<p className="text-[16px] lg:text-[16px] font-semibold text-[#ffffff] mt-4">
						At Ohunene Empowerment Initiative, we are committed to creating
						lasting change in the lives of vulnerable women, children, and youth
						across Kogi State
					</p>
					<NavLink to="/contact">
						<button className="w-fit inline-flex mt-[32px] items-center px-6 py-3 bg-transparent text-[#FFFFFF] border-[1px] border-[#E0FE77] text-[16px] font-bold rounded-md ">
							Get Involved
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
