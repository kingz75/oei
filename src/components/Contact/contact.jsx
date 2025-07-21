import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [countryCode, setCountryCode] = useState("+234");
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullname: formData.fullname,
      phone: `${countryCode} ${formData.phone}`,
      company: formData.company,
      message: formData.message,
      to_email: formData.email, // or whatever field has user's email
    };

    emailjs
      .send(
        "service_278rmra", // e.g. service_abc123
        "template_1qp7k8p", // e.g. template_xyz456
        templateParams,
        "SMZLIV-KQvRGqBwgF" // e.g. abcDEF12345
      )

      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            fullname: "",
            phone: "",
            company: "",
            message: "",
          });
          setCountryCode("+234");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[url('/src/assets/back/whybg.png')] bg-center bg-cover pt-[130px] md:pt-[200px] pb-[50px] text-[#2B2B2B] px-4 sm:px-6 md:px-[50px] lg:px-[101px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-8 md:pt-[100px] leading-[36px]">
          <div className="relative inline-block text-[#182948] text-2xl sm:text-3xl md:text-4xl font-medium">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 sm:w-36 md:w-[170px] h-1.5 bg-[#E9AD3D] rounded-full"></span>
          </div>
          <div className="lg:block hidden">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#292929]">
              Work Hours
            </h3>
            <p className="text-[#292929] mt-2 text-[18px] lg:text-[20px]">
              Monday - Friday
            </p>
            <p className="text-[#292929] text-[18px] lg:text-[20px]">
              09:00 AM to 06:00 PM (WAT)
            </p>
          </div>

          <div className="lg:block hidden">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#292929]">
              Our Location
            </h3>
            <p className="text-[#292929] mt-2 text-[18px] lg:text-[20px]">
              402, Sheikh Building Near Al Ansari Exchange,
              <br />
              Naif Road, Deira, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-[20px] sm:text-2xl font-semibold text-[#3E3D3D] mb-6">
            Drop a Message
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-[14px] sm:text-[16px] font-semibold text-[#69758C] mb-1"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                required
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#292929]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[14px] sm:text-[16px] font-semibold text-[#69758C] mb-1"
              >
                Phone Number (WhatsApp) <span className="text-red-600">*</span>
              </label>
              <div className="flex w-full">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-[100px] border border-gray-300 bg-gray-100 rounded-l px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#292929]"
                >
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+966">🇸🇦 +966</option>
                  <option value="+">others</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter number"
                  className="flex-1 border border-gray-300 rounded-r px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#292929]"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-[14px] sm:text-[16px] font-semibold text-[#69758C] mb-1"
              >
                Company Name <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#292929]"
              />
            </div>

            {/* Additional Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[14px] sm:text-[16px] font-semibold text-[#69758C] mb-1"
              >
                Additional message{" "}
                <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type more message"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#292929]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#174B24] font-medium text-[12px] sm:text-[14px] text-[#FFFFFF] px-[20px] py-[9px] rounded hover:bg-green-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Location & Work Hours */}
        <div className="lg:hidden leading-[36px]">
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#292929]">
              Work Hours
            </h3>
            <p className="text-[#292929] mt-2 text-[18px] sm:text-[20px]">
              Monday - Friday
            </p>
            <p className="text-[#292929] text-[18px] sm:text-[20px]">
              09:00 AM to 06:00 PM (WAT)
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#292929]">
              Our Location
            </h3>
            <p className="text-[#292929] mt-2 text-[18px] sm:text-[20px]">
              402, Sheikh Building Near Al Ansari Exchange,
              <br />
              Naif Road, Deira, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
