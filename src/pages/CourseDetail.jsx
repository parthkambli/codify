// src/pages/CourseDetail.jsx

import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import {
  FaClock,
  FaSignal,
  FaLanguage,
  FaFolderOpen,
  FaCertificate,
  FaCheck,
} from "react-icons/fa";

const toolIcons = {
  html: <FaHtml5 className="text-[#E34F26]" />,
  css: <FaCss3Alt className="text-[#1572B6]" />,
  js: <SiJavascript className="text-[#F7DF1E]" />,
  react: <FaReact className="text-[#61DAFB]" />,
  java: <FaJava className="text-[#f89820]" />,
  mysql: <SiMysql className="text-[#00758F]" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  github: <FaGithub className="text-black" />,
  flutter: <SiFlutter className="text-[#02569B]" />,
  firebase: <SiFirebase className="text-[#FFCA28]" />,
  python: <SiPython className="text-[#3776AB]" />,
  tensorflow: <SiTensorflow className="text-[#FF6F00]" />,
  pandas: <SiPandas className="text-black" />,
  numpy: <SiNumpy className="text-[#013243]" />,
  sklearn: <SiScikitlearn className="text-[#F7931E]" />,
  powerbi: <FaChartBar className="text-[#F2C811]" />,
};

const CourseDetail = () => {
  const { slug } = useParams();

  const course = coursesData.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Course Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f5f5f5] overflow-x-hidden">

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-10 lg:pt-16">

        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* LEFT */}
          <div>

            <h1 className="text-[#0F6FFF] font-bold leading-[1.15]
            text-[36px]
            sm:text-[48px]
            lg:text-[62px]
            max-w-[620px]">
              {course.title}
            </h1>

            <p className="mt-6 text-[#666]
            text-[17px]
            sm:text-[20px]
            leading-8
            font-medium
            max-w-[580px]">
              {course.description}
            </p>

            {/* INFO */}
            <div className="flex flex-wrap gap-8 mt-8">

              <div className="flex items-center gap-3 text-[#444] font-semibold text-[16px]">
                <FaClock className="text-[#0F6FFF]" />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-3 text-[#444] font-semibold text-[16px]">
                <FaSignal className="text-[#0F6FFF]" />
                <span>{course.level}</span>
              </div>

            </div>

            {/* BUTTON */}
            <button className="mt-8 bg-[#0F6FFF] hover:bg-blue-700 transition duration-300
            text-white font-bold
            px-10 py-4
            rounded-[14px]
            text-[20px]
            shadow-md">

              Enroll Now

            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-[28px] overflow-hidden">

            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover rounded-[28px]"
            />

          </div>

        </div>

      </section>

      {/* TABS
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 mt-16">

        <div className="flex gap-10 sm:gap-16 overflow-x-auto whitespace-nowrap">

          <button className="text-[#0F6FFF] font-bold text-[18px] border-b-[3px] border-[#0F6FFF] pb-3">
            Overview
          </button>

          <button className="text-black font-semibold text-[18px] pb-3">
            Curriculam
          </button>

          <button className="text-black font-semibold text-[18px] pb-3">
            Tools
          </button>

        </div>

      </section> */}

      {/* OVERVIEW */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-20">

        <h2 className="text-black font-bold
        text-[34px]
        sm:text-[42px]
        mb-14">
          Courses Overview
        </h2>
        <p className="text-[#555] text-[18px] sm:text-[20px] leading-9 font-medium max-w-[900px] mb-16">
  {course.overview}
</p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-14">

          {/* LEFT */}
          <div>

            <h3 className="font-bold
            text-[32px]
            sm:text-[40px]
            mb-10">
              What you Will Learn
            </h3>

            <div className="space-y-7">

              {course.learn.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5"
                >

                  <div className="min-w-[24px] mt-1">
                    <FaCheck className="text-[#0F6FFF] text-[20px]" />
                  </div>

                  <p className="text-[#333]
                  text-[20px]
                  sm:text-[24px]
                  font-semibold
                  leading-9">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#F0EEF9]
          rounded-[24px]
          p-8
          shadow-[0_4px_10px_rgba(0,0,0,0.08)]
          h-fit">

            <h3 className="font-bold text-[34px] mb-10">
              Course Highlights
            </h3>

            <div className="space-y-9">

              {/* Duration */}
              <div className="flex gap-5">

                <div className="w-[48px] h-[48px] rounded-full bg-[#DCEBFF]
                flex items-center justify-center">
                  <FaClock className="text-[#0F6FFF]" />
                </div>

                <div>
                  <h4 className="font-bold text-[22px]">
                    Duration
                  </h4>

                  <p className="text-[#666] font-medium mt-1">
                    {course.duration}
                  </p>
                </div>

              </div>

              {/* Level */}
              <div className="flex gap-5">

                <div className="w-[48px] h-[48px] rounded-full bg-[#DCEBFF]
                flex items-center justify-center">
                  <FaSignal className="text-[#0F6FFF]" />
                </div>

                <div>
                  <h4 className="font-bold text-[22px]">
                    Level
                  </h4>

                  <p className="text-[#666] font-medium mt-1">
                    {course.level}
                  </p>
                </div>

              </div>

              {/* Language */}
              <div className="flex gap-5">

                <div className="w-[48px] h-[48px] rounded-full bg-[#DCEBFF]
                flex items-center justify-center">
                  <FaLanguage className="text-[#0F6FFF]" />
                </div>

                <div>
                  <h4 className="font-bold text-[22px]">
                    Language
                  </h4>

                  <p className="text-[#666] font-medium mt-1">
                    {course.language}
                  </p>
                </div>

              </div>

              {/* Projects */}
              <div className="flex gap-5">

                <div className="w-[48px] h-[48px] rounded-full bg-[#DCEBFF]
                flex items-center justify-center">
                  <FaFolderOpen className="text-[#0F6FFF]" />
                </div>

                <div>
                  <h4 className="font-bold text-[22px]">
                    Projects
                  </h4>

                  <p className="text-[#666] font-medium mt-1">
                    {course.projects}
                  </p>
                </div>

              </div>

              {/* Certificate */}
              <div className="flex gap-5">

                <div className="w-[48px] h-[48px] rounded-full bg-[#DCEBFF]
                flex items-center justify-center">
                  <FaCertificate className="text-[#0F6FFF]" />
                </div>

                <div>
                  <h4 className="font-bold text-[22px]">
                    Certificates
                  </h4>

                  <p className="text-[#666] font-medium mt-1">
                    {course.certificate}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TOOLS */}
        <div className="mt-24">

          <h2 className="text-center font-bold
          text-[34px]
          sm:text-[44px]
          mb-10">
            Tools You’ll Master
          </h2>

          <div className="bg-[#EDF4FF]
          rounded-[18px]
          shadow-sm
          px-5 py-8
          flex flex-wrap justify-center gap-5">

            {course.tools.map((tool, i) => (
  <div
    key={i}
    className="flex flex-col items-center justify-center
    w-[90px] h-[90px]
    bg-white
    rounded-[16px]
    shadow-sm
    hover:scale-105
    transition duration-300"
  >

    <div className="text-[38px]">
  {toolIcons[tool.icon]}
</div>

    <p className="mt-2 text-[13px] font-semibold text-[#444]">
      {tool.name}
    </p>

  </div>
))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default CourseDetail;