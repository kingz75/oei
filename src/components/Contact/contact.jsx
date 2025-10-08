import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Facebook, Play, Instagram } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cpg7xob", //  EmailJS Service ID
        "template_g4p5mij", //  EmailJS Template ID
        form.current,
        "JTXTAVYuHIuQxu3wX" // EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="lg:pt-[170px] pt-[90px] lg:px-[120px] px-[16px] mb-[75px] font-dmSans">
      {/* Header Section */}
      <div className="text-center lg:mb-[60px] mb-[40px] lg:px-[250px] ">
        <div className="text-[#182948] lg:text-[32px] text-[24px] font-bold mb-[12px] font-playfair">
          Contact us if you have Questions or Suggestions
        </div>
        <div className="text-[#182948] lg:text-[20px] text-[16px]  leading-[28px]">
          Our work spans across skills acquisition, entrepreneurship
          development, health awareness, education support, and advocacy. We
          believe that when individuals—especially women and young people—are
          empowered, families and entire communities are transformed.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="order-2 lg:order-1 bg-[url('/src/assets/back/getintouchbg.png')] bg-cover bg-center lg:py-[60px] lg:px-[60px] py-[50px] px-[20px] lg:rounded-none rounded-3xl text-[#ffffff] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#d0ff2a] lg:mb-10 mb-6">
              Get in touch
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#d0ff2a]" />
                <div>
                  <p className="uppercase text-[14px] font-bold text-[#ffffff90]">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@oei.ng"
                    className="text-[24px] hover:underline"
                  >
                    info@oei.ng
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#d0ff2a]" />
                <div>
                  <p className="uppercase text-[14px] font-bold text-[#ffffff90]">
                    Phone Number
                  </p>
                  <a
                    href="tel:+2349119111100"
                    className="text-[24px] hover:underline"
                  >
                    +23491 1911 1100
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#d0ff2a]" />
                <div>
                  <p className="uppercase text-[14px] font-bold text-[#ffffff90]">
                    Address
                  </p>
                  <p className="text-[24px] leading-6">
                    No. 48 Anthony Enahoro Street,
                    <br />
                    Utako, Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-6 bg-gray-300"></div>
              <p className="mb-0 text-[16px] font-medium">Connect with us:</p>
            </div>

            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/share/1EXbLs77Vi/?mibextid=wwXIfr"
                className="hover:text-[#d0ff2a] bg-[#ffffff20] p-[8px] rounded-md"
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/@OhuneneEmpowermentInitiative"
                className="hover:text-[#d0ff2a] bg-[#ffffff20] p-[8px] rounded-md"
              >
                <Play />
              </a>
              <a
                href="https://www.instagram.com/oei.ng?igsh=MTQxeDB3Z3Z2b2IxZw=="
                className="hover:text-[#d0ff2a] bg-[#ffffff20] p-[8px] rounded-md"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="order-1 lg:order-2 bg-gray-50 lg:px-10 lg:py-10 py-10 px-2 flex flex-col justify-center lg:rounded-none rounded-3xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full name */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#061c3d]"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-[#e6e8ec] focus:ring-1 focus:ring-[#d0ff2a] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#061c3d]"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-md border border-[#e6e8ec] focus:ring-1 focus:ring-[#d0ff2a] focus:outline-none"
                />
              </div>
            </div>

            {/* ✅ Subject as Dropdown */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-[#061c3d]"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-md border border-[#e6e8ec] bg-white focus:ring-1 focus:ring-[#d0ff2a] focus:outline-none"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnership Request">Partnership Request</option>
                <option value="Volunteer Opportunity">
                  Volunteer Opportunity
                </option>
                <option value="Donation Support">Donation Support</option>

                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#061c3d]"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-md border border-[#e6e8ec] focus:ring-1 focus:ring-[#d0ff2a] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#061c3d]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us more..."
                className="w-full px-4 py-3 rounded-md border border-[#e6e8ec] focus:ring-1 focus:ring-[#d0ff2a] focus:outline-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center space-x-2 bg-[#abc452] text-[#182948] font-semibold py-3 px-6 rounded-md hover:shadow-lg hover:translate-y-[-2px] transition"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </button>

            {success === true && (
              <p className="text-green-600 mt-2">
                Message sent successfully ✅
              </p>
            )}
            {success === false && (
              <p className="text-red-600 mt-2">
                Something went wrong. Try again ❌
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
