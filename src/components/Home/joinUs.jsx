import React from 'react';
import { useState } from 'react';

export default function JoinUs() {
	const [email, setEmail] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (email) {
			alert(`Thank you for joining us`);
		}
	};
	return (
		<div className="bg-[url('/src/assets/images/joinUs.png')] lg:h-[537px] h-[460px] flex flex-col justify-center items-center">
			<div className=" text-[#ffffff] flex flex-col justify-center items-center gap-8  px-4  max-w-[620px]">
				<h1 className="text-[#D7F766] lg:text-[48px] text-[32px] text-center font-playfair text-semibold">
					Join Our Community
				</h1>
				<p className="text-[#ffffff] text-[20px] leading-[36px]  text-center">
					We believe that when individuals-especially women and young people-are
					empowered, families and entire communities are transformed.
				</p>
				<div className="space-y-4  w-4/5">
					<div className="flex bg-white rounded-lg overflow-hidden text-[#555555] shadow-sm lg:py-3 py-1 lg:px-3 px-1 gap-4">
						<div className="flex-1 relative">
							<input
								type="text"
								placeholder="Enter Email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								className="w-full pl-8 pr-4 py-4 text-[16px] font-light text-[#182948] placeholder:text-[#555555]    border-none outline-none focus:ring-0"
								min="1"
								step="0.01"
								onKeyDown={e => {
									if (e.key === 'Enter') {
										handleSubmit(e);
									}
								}}
							/>
						</div>
						<button
							onClick={handleSubmit}
							className="px-8 py-4 bg-[#ABC452]  rounded-lg  text-white font-semibold transition-colors duration-200"
						>
							Join
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
