import React from "react";

function Ourstory() {
  // YouTube video ID extracted from the provided URL
  const YOUTUBE_VIDEO_ID = "bIgNKKU7bpw";
  
  return (
    <section className="my-[50px] px-[16px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
        {/* Left Side - Text */}
        <div className="text-left">
          <h2 className="lg:text-[32px] text-[24px] font-medium text-[#182948]">
            Our Story
          </h2>
          <div className="border-b-[7px] rounded-full lg:w-[150px] w-[105px] border-[#ABC452] lg:mx-0 mt-2"></div>

          <p className="text-[#555555] mt-5 lg:text-[20px] text-[16px] lg:leading-[36px] leading-[32px]">
            Ohunene Empowerment Initiative was born from a deep desire to uplift
            individuals and communities through compassion, opportunity, and
            empowerment. What began as a simple act of service has grown into a
            movement committed to breaking cycles of poverty, ignorance, and
            disempowerment-especially among women, youth, and underserved
            populations. We are more than an organization; we are a community of
            change-makers, driven by empathy and inspired by possibility. Every
            story we touch fuels our mission, and every milestone reminds us why
            we started. This is just the beginning.
          </p>
        </div>

        {/* Right Side - YouTube Video */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&showinfo=0`}
                title="Our Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourstory;