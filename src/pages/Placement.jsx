// src/pages/Placement.jsx

import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import studentsImage from "../assets/hero-students.png"; // <-- your students png

const Placement = () => {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-x-hidden">

{/* HERO SECTION */}
<section className="w-full pt-4">

  <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

    <div className="grid grid-cols-2 items-start">

      {/* LEFT SIDE */}
      <div className="pt-10">

        {/* HEADING */}
        <h1 className="text-[58px] font-bold leading-[72px] tracking-[-1px] text-black">
          Our{" "}
          <span className="text-[#0F6FFF]">
            Placement
          </span>{" "}
          Success
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-10 max-w-[860px] text-[18px] leading-[30px] font-medium text-[#222]">
          At Codify Institute, we focus on building real-world skills that help
          students confidently crack interviews and secure opportunities in the
          tech industry. Through practical training, live projects, mentorship,
          and interview preparation, our students are becoming industry-ready
          developers.
        </p>

        {/* STATS */}
        <div className="flex items-center gap-14 mt-14">

          {/* ITEM */}
          <div>
            <h2 className="text-[#0F6FFF] text-[38px] font-bold leading-none">
              250+
            </h2>

            <p className="mt-2 text-[15px] leading-5 font-semibold text-[#444]">
              Trained Students
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-[#0F6FFF] text-[38px] font-bold leading-none">
              10+
            </h2>

            <p className="mt-2 text-[15px] leading-5 font-semibold text-[#444]">
              Excellent Tutor
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-[#0F6FFF] text-[38px] font-bold leading-none">
              90%
            </h2>

            <p className="mt-2 text-[15px] leading-5 font-semibold text-[#444]">
              Placement Guarantee
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-[#0F6FFF] text-[38px] font-bold leading-none">
              3.5 LPA
            </h2>

            <p className="mt-2 text-[15px] leading-5 font-semibold text-[#444]">
              Average Package
            </p>
          </div>

          {/* ITEM */}
          <div>
            <h2 className="text-[#0F6FFF] text-[38px] font-bold leading-none">
              50+
            </h2>

            <p className="mt-2 text-[15px] leading-5 font-semibold text-[#444]">
              Hiring Pattern
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-end">

        <img
          src={studentsImage}
          alt="students"
          className="w-[350px] object-contain"
        />
      </div>

    </div>

  </div>
</section>
      {/* RECRUITERS */}
      {/* <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 mt-20">

        <h2 className="text-4xl font-bold text-center text-[#222]">
          Our Top Recruiters
        </h2>

        <div className="bg-[#ECECF2] rounded-[28px] mt-12 h-[180px] sm:h-[220px] lg:h-[250px] shadow-sm"></div>

      </section> */}

      {/* SUCCESS STORIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 mt-24 pb-24">

        <h2 className="text-4xl font-bold text-center text-[#222]">
          Our Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative hover:-translate-y-2 transition duration-300">

            <FaQuoteLeft className="text-[#6EA8FF] text-4xl" />

            <p className="text-[#555] text-[17px] font-semibold leading-9 mt-5">
              "Codify helped me switch from civil engineering to full-stack
              dev. Now earning 3x more!"
            </p>

            <FaQuoteRight className="text-[#6EA8FF] text-4xl absolute right-8 bottom-28" />

            <div className="flex items-center gap-5 mt-12">

              <div className="w-16 h-16 rounded-full bg-[#d9d9d9]"></div>

              <div>
                <h3 className="text-2xl font-bold text-[#111]">
                  Rahul Sharma
                </h3>

                <p className="text-[#666] text-lg">
                  Full Stack Developer
                </p>

                {/* <p className="text-[#666]">
                  Placed at TCS
                </p> */}
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative hover:-translate-y-2 transition duration-300">

            <FaQuoteLeft className="text-[#6EA8FF] text-4xl" />

            <p className="text-[#555] text-[17px] font-semibold leading-9 mt-5">
              "The mentorship was unreal. My mentor still reviews my PRs even
              after placement!"
            </p>

            <FaQuoteRight className="text-[#6EA8FF] text-4xl absolute right-8 bottom-28" />

            <div className="flex items-center gap-5 mt-12">

              <div className="w-16 h-16 rounded-full bg-[#d9d9d9]"></div>

              <div>
                <h3 className="text-2xl font-bold text-[#111]">
                  Anjali Mehta
                </h3>

                <p className="text-[#666] text-lg">
                  Frontend Engineer
                </p>

                {/* <p className="text-[#666]">
                  Placed at Paytm
                </p> */}
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative hover:-translate-y-2 transition duration-300">

            <FaQuoteLeft className="text-[#6EA8FF] text-4xl" />

            <p className="text-[#555] text-[17px] font-semibold leading-9 mt-5">
              "Best investment I ever made. Landed a FAANG offer in 4 months."
            </p>

            <FaQuoteRight className="text-[#6EA8FF] text-4xl absolute right-8 bottom-28" />

            <div className="flex items-center gap-5 mt-12">

              <div className="w-16 h-16 rounded-full bg-[#d9d9d9]"></div>

              <div>
                <h3 className="text-2xl font-bold text-[#111]">
                  Karthik Reddy
                </h3>

                <p className="text-[#666] text-lg">
                  SDE-2
                </p>

                {/* <p className="text-[#666]">
                  Placed at Microsoft
                </p> */}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Placement;
