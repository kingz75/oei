import { useState } from 'react';
import donationImage from '../../assets/images/donationPage.png';
import { div } from 'framer-motion/client';

export default function Donation() {
	const [donationType, setDonationType] = useState('one-time');
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		amount: '',
		customAmount: '',
	});
	const [countryCode, setCountryCode] = useState('+234');
	const [isProcessing, setIsProcessing] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const predefinedAmounts = ['50,000', '100,000', '500,000'];

	const handleAmountSelect = amount => {
		setFormData({ ...formData, amount: amount, customAmount: '' });
	};

	const handleCustomAmountChange = e => {
		const value = e.target.value.replace(/,/g, '');
		if (/^\d*$/.test(value)) {
			setFormData({ ...formData, customAmount: value, amount: '' });
		}
	};

	const handleSubmit = () => {
		if (
			!formData.fullName ||
			!formData.email ||
			(!formData.amount && !formData.customAmount)
		) {
			return;
		}

		setIsProcessing(true);
		setTimeout(() => {
			setIsProcessing(false);
			setShowSuccess(true);

			setTimeout(() => {
				setShowSuccess(false);
				setFormData({
					fullName: '',
					email: '',
					phoneNumber: '',
					amount: '',
					customAmount: '',
				});
			}, 3000);
		}, 2000);
	};

	const formatAmount = value => {
		return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const getSelectedAmount = () => {
		return formData.customAmount || formData.amount.replace(/,/g, '');
	};

	return (
		<div>
			<div className="min-h-screen  py-8 px-4  lg:pt-[150px] pt-[100px]">
				<div className="max-w-[1440px] mx-auto">
					<div className="flex flex-col-reverse md:flex-row gap-10 justify-center lg:px-[100px]">
						<div className="space-y-6 lg:w-1/2 w-full">
							<div className=" lg:p-6 px-3 rounded-lg">
								<div className="space-y-4">
									<div className="mb-6">
										<h3 className="font-semibold text-[#292929] text-[22px] leading-[28px] mb-1">
											Email us
										</h3>
										<p className="text-[#3E3D3D] text-[20px] leading-[24px]">
											info@oei.ng
										</p>
									</div>

									<div className="mb-6">
										<h3 className="font-semibold text-[#292929] text-[22px] leading-[28px] mb-1">
											Call or Chat on WhatsApp
										</h3>
										<p className="text-[#3E3D3D] text-[20px] leading-[24px]">
											++234911911 1100
										</p>
									</div>

									<div className="mb-6">
										<h3 className="font-semibold text-[#292929] text-[22px] leading-[28px] mb-1">
											Our Location
										</h3>
										<p className="text-[#3E3D3D] text-[20px] leading-[24px]">
											No. 48 Anthony Enahoro Street, Utako,
											<br />
											Abuja, Nigeria
										</p>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-2xl lg:px-0 px-2 shadow-sm overflow-hidden">
								<img
									src={donationImage}
									alt="Walk away from drugs campaign"
									className="w-full h-[302px] object-cover"
								/>
							</div>
						</div>
						<div className="lg:w-1/2 w-full bg-white lg:p-10 p-3 rounded-lg shadow-xl">
							<h2 className="text-[32px] font-semibold text-gray-[#3E3D3D] mb-[18px]">
								Donate Now
							</h2>

							<div className="space-y-6">
								<div>
									<label className="block text-[16px] text-[#69758C] mb-2">
										Donation Frequency
									</label>
									<div className="flex border   overflow-hidden">
										<button
											type="button"
											onClick={() => setDonationType('one-time')}
											className={`flex-1 py-2.5 text-sm  ${
												donationType === 'one-time'
													? 'border-[#ABC452]  font-bold border-[0.1px] text-[#ABC452]'
													: ' text-[#182948] rounded-lg'
											}`}
										>
											One-time donation
										</button>
										<button
											type="button"
											onClick={() => setDonationType('monthly')}
											className={`flex-1 py-2.5 text-sm ${
												donationType === 'monthly'
													? 'border-[#ABC452] font-bold border-[0.1px] text-[#ABC452]'
													: ' text-[#182948] rounded-lg'
											}`}
										>
											Monthly donation
										</button>
									</div>
								</div>
								<div>
									<label className="block text-[16px] text-[#69758C] mb-2">
										Full Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										value={formData.fullName}
										onChange={e =>
											setFormData({ ...formData, fullName: e.target.value })
										}
										className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
								<div>
									<label className="block text-[16px] text-[#69758C] mb-2">
										Email Address <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										value={formData.email}
										onChange={e =>
											setFormData({ ...formData, email: e.target.value })
										}
										className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
								<div>
									<label className="block text-[16px] text-[#69758C] mb-2">
										Phone Number (Optional){' '}
										<span className="text-red-500">*</span>
									</label>
									<div className="flex gap-2">
										<select
											value={countryCode}
											onChange={e => setCountryCode(e.target.value)}
											className="w-28 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										>
											<option value="+234">🇳🇬 +234</option>
											<option value="+1">🇺🇸 +1</option>
											<option value="+44">🇬🇧 +44</option>
										</select>
										<input
											type="tel"
											value={formData.phoneNumber}
											onChange={e =>
												setFormData({
													...formData,
													phoneNumber: e.target.value,
												})
											}
											className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
									</div>
								</div>
								<div>
									<label className="block text-[16px] text-[#69758C] mb-2">
										Amount
									</label>
									<div className="grid grid-cols-3 gap-3 mb-3">
										{predefinedAmounts.map(amount => (
											<button
												key={amount}
												type="button"
												onClick={() => handleAmountSelect(amount)}
												className={`py-2.5 px-4 border rounded-lg text-sm font-medium transition-colors ${
													formData.amount === amount
														? 'bg-gray-900 text-white border-gray-900'
														: 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
												}`}
											>
												₦{amount}
											</button>
										))}
									</div>
									<input
										type="text"
										placeholder="Enter custom amount"
										value={
											formData.customAmount
												? formatAmount(formData.customAmount)
												: ''
										}
										onChange={handleCustomAmountChange}
										className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
								<div className="text-[16px] text-[#8C8C8C]">
									By clicking donate button, you agree to the{' '}
									<span className="text-[#353535] cursor-pointer hover:underline">
										Terms of use
									</span>{' '}
									and{' '}
									<span className="text-[#353535] cursor-pointer hover:underline">
										Privacy Policy
									</span>
									.
								</div>
								<button
									type="button"
									onClick={handleSubmit}
									disabled={
										isProcessing ||
										!formData.fullName ||
										!formData.email ||
										(!formData.amount && !formData.customAmount)
									}
									className="w-full bg-[#ABC452] hover:bg-lime-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isProcessing ? 'Processing...' : 'Donate'}
								</button>
							</div>
							{/* {showSuccess && (
								<div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
									<p className="text-green-800 font-medium">
										Thank you for your {donationType} donation of ₦
										{formatAmount(getSelectedAmount())}!
									</p>
									<p className="text-green-600 text-sm mt-1">
										Payment processed successfully.
									</p>
								</div>
							)} */}
						</div>
					</div>
				</div>
			</div>
			<div className="lg:py-[120px] py-[20px] lg:px-[80px] px-[16px] bg-[#F3F5FF]">
				<p className="lg:text-[32px] text-[24px]  lgleading-[56px] leading-[40px] text-center font-playfair">
					"Your support makes a difference! Consider making a donation to help
					us <span className="font-extrabold text-[#80A00D]">educate</span>{' '}
					<span className="font-extrabold text-[#80A00D]">empower, </span>{' '}
					<span className="font-extrabold text-[#80A00D]">protect</span>{' '}
					communities. Every contribution, big or small, brings us closer to
					achieving a drug-free and empowered Kogi State. Thank you for being
					part of our community!"
				</p>
			</div>
		</div>
	);
}
