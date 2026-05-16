// src/pages/About.jsx

import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaAward,
  FaBullseye,
  FaChartLine,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

import aboutImage from "../assets/about.png"; // <-- your classroom image


const About = () => {
  return (
    <>
      {/* MAIN PAGE */}
      <div className="w-full bg-[#f5f5f5] overflow-x-hidden">

        {/* ABOUT SECTION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-14 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight">
                About <span className="text-[#0F6FFF]">Codify</span> Institute
              </h1>

              <p className="mt-8 text-[#444] text-[16px] leading-8">
                Founded in 2023 by senior engineers from leading MNCs and
                unicorn startups, Codify Institute was built to bridge the gap
                between traditional education and real industry requirements.
                We provide practical, project-based learning led by experienced
                developers to help students build real-world skills and become
                job-ready professionals.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-5 mt-10">

                <div>
                  <h2 className="text-4xl font-bold text-[#0F6FFF]">250+</h2>
                  <p className="text-[#444] font-medium mt-2 text-sm sm:text-base">
                    Trained Students
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-[#0F6FFF]">10+</h2>
                  <p className="text-[#444] font-medium mt-2 text-sm sm:text-base">
                    Excellent Tutor
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-[#0F6FFF]">90%</h2>
                  <p className="text-[#444] font-medium mt-2 text-sm sm:text-base">
                    Placement Guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="border-[8px] border-[#8EA2FF] rounded-[30px] overflow-hidden shadow-xl w-full max-w-[550px]">
                <img
                  src={aboutImage}
                  alt="About Codify"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD */}
            <div className="bg-[#dbeafe] rounded-2xl py-10 px-6 text-center relative shadow-md hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2">
                <FaBookOpen className="text-[#0F6FFF] text-3xl" />
              </div>

              <div className="mt-12">
                <h2 className="text-5xl font-bold text-[#111]">10+</h2>
                <p className="mt-4 text-lg font-semibold text-[#222]">
                  Online Courses
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-[#dbeafe] rounded-2xl py-10 px-6 text-center relative shadow-md hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2">
                <FaChalkboardTeacher className="text-red-500 text-3xl" />
              </div>

              <div className="mt-12">
                <h2 className="text-5xl font-bold text-[#111]">50+</h2>
                <p className="mt-4 text-lg font-semibold text-[#222]">
                  Hiring Partner
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-[#dbeafe] rounded-2xl py-10 px-6 text-center relative shadow-md hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2">
                <FaUserGraduate className="text-lime-500 text-3xl" />
              </div>

              <div className="mt-12">
                <h2 className="text-5xl font-bold text-[#111]">250+</h2>
                <p className="mt-4 text-lg font-semibold text-[#222]">
                  Online Students
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-[#dbeafe] rounded-2xl py-10 px-6 text-center relative shadow-md hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2">
                <FaAward className="text-orange-500 text-3xl" />
              </div>

              <div className="mt-12">
                <h2 className="text-5xl font-bold text-[#111]">98%</h2>
                <p className="mt-4 text-lg font-semibold text-[#222]">
                  Satisfied Student
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISION MISSION SECTION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 mt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* VISION */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#dbeafe] hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaBullseye className="text-[#0F6FFF] text-4xl" />
                <h2 className="text-4xl font-bold text-[#222]">
                  Our Vision
                </h2>
              </div>

              <p className="text-[#444] text-[17px] leading-8">
                To become a leading technology training institute that empowers
                students with industry-ready skills, practical knowledge, and
                the confidence to build successful careers in the tech industry.
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#dbeafe] hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaChartLine className="text-[#0F6FFF] text-4xl" />
                <h2 className="text-4xl font-bold text-[#222]">
                  Our Mission
                </h2>
              </div>

              <p className="text-[#444] text-[17px] leading-8">
                Deliver affordable, industry-focused education through hands-on
                learning, real projects, mentorship, and career guidance to
                prepare students for modern technology careers.
              </p>
            </div>

            {/* INNOVATION */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#dbeafe] hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaLightbulb className="text-[#0F6FFF] text-4xl" />
                <h2 className="text-4xl font-bold text-[#222]">
                  Innovation
                </h2>
              </div>

              <p className="text-[#444] text-[17px] leading-8">
                We continuously adapt to evolving technologies and teaching
                methods to ensure students gain modern, relevant, and practical
                technical skills.
              </p>
            </div>

            {/* COMMUNITY */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#dbeafe] hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <FaUsers className="text-[#0F6FFF] text-4xl" />
                <h2 className="text-4xl font-bold text-[#222]">
                  Community
                </h2>
              </div>

              <p className="text-[#444] text-[17px] leading-8">
                Foster a supportive, inclusive learning environment where every
                student belongs and succeeds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pb-20">
          <div className="bg-gradient-to-r from-[#3D44C2] to-[#0F6FFF] rounded-[30px] px-8 py-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ready To start your Journey?
              </h2>

              <p className="text-white/90 mt-4 text-lg">
                Learn, Build and Grow With Codify Institute
              </p>
            </div>

            <button className="bg-white text-[#111] px-10 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Enroll Now
            </button>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default About;