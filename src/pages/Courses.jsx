// src/pages/Courses.jsx

import React from "react";
import {
  FaClock,
  FaSignal,
  FaStar,
} from "react-icons/fa";

import webImg from "../assets/web-course.png";
import dataImg from "../assets/data-analysis.png";
import mobileImg from "../assets/mobile-dev.png";
import scienceImg from "../assets/data-science.png";

const courses = [
  {
    title: "FULL STACK WEB DEVELOPMENT",
    description:
      "Build complete web and mobile applications using frontend, backend, databases, and APIs.",
    image: webImg,
  },
  {
    title: "DATA ANALYSIS",
    description:
      "Analyze and visualize data to discover insights and support better decision-making.",
    image: dataImg,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Create fast, beautiful, and cross-platform mobile apps for Android and iOS using Flutter.",
    image: mobileImg,
  },
  {
    title: "DATA SCIENCE",
    description:
      "Master Data Science with hands on training in python, Machine Learning and Data Analysis.",
    image: scienceImg,
  },
];

const Courses = () => {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#4B4FCF] to-[#2D8CFF] relative overflow-hidden">

        {/* PARTICLES */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-14 right-1/4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-28 right-16 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-14 right-1/3 w-2 h-2 bg-white rounded-full"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 relative z-10">

          {/* TITLE */}
          <h1 className="text-center text-white text-[34px] sm:text-[48px] lg:text-[68px] font-bold leading-tight">
            Our Courses
          </h1>

          {/* SUBTITLE */}
          <p className="text-center text-white mt-3 text-[16px] sm:text-[22px] font-medium">
            Explore Our Industry Related courses and start your career
          </p>

        </div>
      </section>

      {/* FILTER */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 mt-10">

        <button className="border-2 border-black rounded-full px-8 py-3 text-[18px] font-semibold bg-white hover:bg-black hover:text-white transition duration-300 shadow-sm">
          All Courses
        </button>

      </section>

      {/* COURSES */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="space-y-10">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-[#d8d8d8]"
            >

              <div className="grid lg:grid-cols-[320px_1fr]">

                {/* LEFT IMAGE */}
                <div className="h-[240px] sm:h-[300px] lg:h-full">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* RIGHT CONTENT */}
                <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-between">

                  <div>

                    {/* TITLE */}
                    <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-black leading-tight">
                      {course.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-5 text-[#666] text-[17px] sm:text-[20px] leading-8 font-medium max-w-[700px]">
                      {course.description}
                    </p>

                    {/* INFO */}
                    <div className="flex flex-wrap items-center gap-8 mt-7">

                      {/* DURATION */}
                      <div className="flex items-center gap-3 text-[#555] font-semibold text-[16px] sm:text-[18px]">
                        <FaClock className="text-[#0F6FFF]" />
                        <span>24 Months</span>
                      </div>

                      {/* LEVEL */}
                      <div className="flex items-center gap-3 text-[#555] font-semibold text-[16px] sm:text-[18px]">
                        <FaSignal className="text-[#0F6FFF]" />
                        <span>Beginner</span>
                      </div>

                    </div>

                    {/* STARS */}
                    <div className="flex items-center gap-2 mt-6">

                      <FaStar className="text-yellow-400 text-[22px]" />
                      <FaStar className="text-yellow-400 text-[22px]" />
                      <FaStar className="text-yellow-400 text-[22px]" />
                      <FaStar className="text-yellow-400 text-[22px]" />
                      <FaStar className="text-yellow-400 text-[22px]" />

                    </div>

                  </div>

                  {/* BUTTON */}
                  <div className="mt-8 lg:mt-0 flex lg:justify-end">

                    <button className="border-2 border-[#0F6FFF] text-[#0F6FFF] hover:bg-[#0F6FFF] hover:text-white transition duration-300 rounded-[14px] px-7 py-3 text-[18px] sm:text-[20px] font-bold shadow-sm">

                      View Details

                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Courses;