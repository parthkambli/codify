import { Link } from 'react-router-dom';

// Import all images from assets
import HeroImage from '../assets/hero-students.png';           // Two students image
import BgRIng from '../assets/bg-ring.png';           // ring behind the student
import Course1 from '../assets/fullstack.png';
import Course2 from '../assets/data-analysis.png';
import Course3 from '../assets/mobile-app.png';
import Course4 from '../assets/data-science.png';

import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Award,
} from "lucide-react";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-white pt-28 md:pt-0 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium">
            Best Institute For Your Bright Future
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            The <span className="text-blue-600">Foundation</span> For
            <br className="hidden sm:block" />
            Everything You Do
            </h1>

            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Learn to Code, Land Your Dream Job. Get 100% Practical
            trainings with Job Placement Guarantee on Paper.
            </p>

            <div>
            <a
                href="/courses"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
                Explore Courses
            </a>
            </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center w-full">

            {/* Outer Ring */}
            <div
            className="absolute rounded-full border-[40px] sm:border-[55px] lg:border-[72px] border-blue-500/15"
            style={{
                width: 'clamp(280px, 80vw, 620px)',
                height: 'clamp(280px, 80vw, 620px)',
            }}
            />

            {/* Glow */}
            <div
            className="absolute rounded-full blur-3xl"
            style={{
                width: 'clamp(220px, 65vw, 460px)',
                height: 'clamp(220px, 65vw, 460px)',
                background:
                'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            }}
            />

            {/* Hero Image */}
            <img
            src={HeroImage}
            alt="Students with laptop and tablet"
            className="relative z-10 w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[620px] object-contain drop-shadow-2xl"
            />

            {/* Top Card */}
            <div
            className="absolute top-[10%] right-[2%] sm:right-[8%] bg-white rounded-2xl shadow-xl px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 border border-gray-100 z-20"
            >
            <div className="text-blue-600 font-bold text-xl sm:text-3xl leading-none">
                5k+
            </div>

            <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                Active
                <br />
                Students
            </div>
            </div>

            {/* Bottom Card */}
            <div
            className="absolute bottom-[8%] left-[2%] sm:left-[8%] bg-white rounded-2xl shadow-xl px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 border border-gray-100 z-20"
            >
            <div className="text-blue-600 font-bold text-xl sm:text-3xl leading-none">
                50+
            </div>

            <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                Partner
                <br />
                Companies
            </div>
            </div>

        </div>
        </div>
    </div>
    </section>

    {/* Trusted By Banner */}
    <div className="bg-gradient-to-r from-[#4F5FBF] to-[#3B82F6] py-5 sm:py-6 px-4 text-center">
    
    {/* Main Text */}
    <p className="text-white text-sm sm:text-base md:text-lg font-medium tracking-wide">
        Trusted by{" "}
        <span className="text-blue-200 font-semibold">
        5000+
        </span>{" "}
        students & leading companies
    </p>

    {/* Subtitle */}
    <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-blue-100/70 font-medium tracking-wide">
        Placement Company logo
    </p>

    </div>

    {/* Stats Section */}
    <section className="bg-[#f5f5f5] py-14 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">

        {[
            {
            number: "10+",
            label: "Online Courses",
            icon: BookOpen,
            color: "text-blue-600",
            },
            {
            number: "50+",
            label: "Hiring Pattern",
            icon: BriefcaseBusiness,
            color: "text-red-500",
            },
            {
            number: "250+",
            label: "Online Students",
            icon: GraduationCap,
            color: "text-green-500",
            },
            {
            number: "10+",
            label: "Certified Courses",
            icon: Award,
            color: "text-orange-500",
            },
        ].map((stat, i) => {
            const Icon = stat.icon;

            return (
            <div
                key={i}
                className="relative bg-[#a9c6ee] rounded-md pt-12 sm:pt-14 pb-6 sm:pb-8 px-4 sm:px-6 text-center shadow-sm hover:-translate-y-1 transition-all duration-300"
            >

                {/* Floating Icon */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>

                {/* Number */}
                <h3 className="text-2xl sm:text-3xl font-bold text-black">
                {stat.number}
                </h3>

                {/* Label */}
                <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-black leading-snug">
                {stat.label}
                </p>

            </div>
            );
        })}
        </div>
    </div>
    </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Popular Courses</h2>
            <p className="text-gray-600 mt-3">Explore Our Industry Related courses and start your career</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Course Cards */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <img src={Course1} alt="Full Stack" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">FULL STACK WEB DEVELOPMENT</h3>
                <p className="text-gray-600">Build web applications from frontend to backend.</p>
                <Link to="/courses" className="text-blue-600 font-medium mt-6 inline-block group-hover:underline">
                  View Details →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <img src={Course2} alt="Data Analysis" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">DATA ANALYSIS</h3>
                <p className="text-gray-600">Turn data into meaningful insights and reports.</p>
                <Link to="/courses" className="text-blue-600 font-medium mt-6 inline-block group-hover:underline">
                  View Details →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <img src={Course3} alt="Mobile App" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">MOBILE APP DEVELOPMENT</h3>
                <p className="text-gray-600">Learn to build beautiful Android & iOS applications.</p>
                <Link to="/courses" className="text-blue-600 font-medium mt-6 inline-block group-hover:underline">
                  View Details →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <img src={Course4} alt="Data Science" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">DATA SCIENCE</h3>
                <p className="text-gray-600">Master data science, machine learning & AI.</p>
                <Link to="/courses" className="text-blue-600 font-medium mt-6 inline-block group-hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Why To Choose Us ?</h2>
          <p className="text-gray-600 mb-12">We Provide the best environment to Help you to succeed</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Practical Learning", desc: "Hands-On Projects and real experience" },
              { title: "Expert Teachers", desc: "Learn From Industry Experience mentors" },
              { title: "Placement support", desc: "100% placement and support" },
              { title: "Live Projects", desc: "work on live projects & Build Portfolio" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                  {["📚", "👨‍🏫", "💼", "🚀"][i]}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add your actual testimonials here */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="italic text-gray-600 mb-6">
                "I enrolled in the Codify Institute's software training program, and it has been an outstanding experience..."
              </p>
              <div>
                <div className="font-semibold">Vikrant Ghorat</div>
                <div className="text-sm text-gray-500">Mobile Developer</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="italic text-gray-600 mb-6">
                "Thank you so much kishor sir for JOB Placement..."
              </p>
              <div>
                <div className="font-semibold">Pranali Sonawane</div>
                <div className="text-sm text-gray-500">Data Analysis</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="italic text-gray-600 mb-6">
                "At Codify Institute, I had an amazing time!..."
              </p>
              <div>
                <div className="font-semibold">Maitreyee Vartak</div>
                <div className="text-sm text-gray-500">Flutter Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
    <section className="bg-[#f3f4f6] py-8 sm:py-10 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-[#2E3192] to-[#1C86F2] rounded-2xl px-6 sm:px-10 py-7 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">

        {/* Left Content */}
        <div>
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Start Your Tech Journey Today!
            </h2>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg font-medium mt-2">
            Learn, Build and Grow With Codify Institute
            </p>
        </div>

        {/* Button */}
        <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 whitespace-nowrap shadow-md">
            Enroll now
        </button>

        </div>
    </div>
    </section>

    </main>
  );
};

export default Home;