// src/pages/Enquiry.jsx

import React from "react";
import enquiryImage from "../assets/enquiry.png";

const Enquiry = () => {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-x-hidden">

      {/* MAIN SECTION */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-2 lg:pt-4 pb-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-10 w-full">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">

            <img
              src={enquiryImage}
              alt="Enquiry"
              className="w-full max-w-[430px] lg:max-w-[470px] object-contain"
            />

          </div>

          {/* RIGHT FORM */}
          <div>

            {/* TITLE */}
            <h1 className="text-center text-[22px] sm:text-[30px] lg:text-[36px] font-bold text-black mb-6">
              Enquiry form
            </h1>

            {/* FORM BOX */}
            <div className="bg-white rounded-[28px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] px-5 sm:px-8 py-7">

              {/* COURSE TYPE */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

                {/* ONLINE */}
                <label className="flex items-center gap-4 border-2 border-[#B6AAAA] rounded-[18px] px-5 py-4 w-full sm:w-[240px] cursor-pointer shadow-sm">

                  <input
                    type="radio"
                    name="courseType"
                    className="w-5 h-5 accent-[#0F6FFF]"
                    defaultChecked
                  />

                  <span className="text-[18px] font-semibold text-[#777]">
                    Online Courses
                  </span>

                </label>

                {/* OFFLINE */}
                <label className="flex items-center gap-4 border-2 border-[#B6AAAA] rounded-[18px] px-5 py-4 w-full sm:w-[240px] cursor-pointer shadow-sm">

                  <input
                    type="radio"
                    name="courseType"
                    className="w-5 h-5 accent-[#0F6FFF]"
                  />

                  <span className="text-[18px] font-semibold text-[#777]">
                    Offline Training
                  </span>

                </label>

              </div>

              {/* INPUTS */}
              <div className="mt-6 space-y-4">

                {/* NAME */}
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-[64px] border-2 border-[#B6AAAA] rounded-[18px] px-6 text-[18px] font-medium outline-none focus:border-[#0F6FFF] shadow-sm placeholder:text-[#9B9B9B]"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-[64px] border-2 border-[#B6AAAA] rounded-[18px] px-6 text-[18px] font-medium outline-none focus:border-[#0F6FFF] shadow-sm placeholder:text-[#9B9B9B]"
                />

                {/* PHONE */}
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full h-[64px] border-2 border-[#B6AAAA] rounded-[18px] px-6 text-[18px] font-medium outline-none focus:border-[#0F6FFF] shadow-sm placeholder:text-[#9B9B9B]"
                />

                {/* MESSAGE */}
                <textarea
                  placeholder="Write your Message"
                  rows="4"
                  className="w-full border-2 border-[#B6AAAA] rounded-[18px] px-6 py-5 text-[18px] font-medium outline-none focus:border-[#0F6FFF] shadow-sm resize-none placeholder:text-[#9B9B9B]"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button className="w-full mt-6 bg-[#DCEBFF] hover:bg-[#c9defd] transition duration-300 h-[64px] rounded-[18px] text-[24px] font-bold text-black shadow-sm">

                Send Message

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Enquiry;