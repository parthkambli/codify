import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

const ThankYou = () => {
    useEffect(() => {
        return () => {
            localStorage.removeItem("payment_success");
        };
        }, []);
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-5">

      <div className="bg-white max-w-[700px] w-full rounded-[28px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-8 sm:p-12 text-center">

        {/* ICON */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle className="text-green-600 text-[64px]" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-[34px] sm:text-[48px] font-bold text-black">
          Payment Successful
        </h1>

        {/* TEXT */}
        <p className="mt-6 text-[#666] text-[18px] sm:text-[22px] leading-9 font-medium">
          Thank you for enrolling with Codify Institute.
          Your payment has been received successfully.
        </p>

        <p className="mt-4 text-[#666] text-[17px] leading-8">
          Our team will contact you shortly with course details,
          onboarding information, and next steps.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="bg-[#0F6FFF] hover:bg-blue-700 transition duration-300 text-white font-bold px-8 py-4 rounded-[14px] text-[18px]"
          >
            Back To Home
          </Link>

          <Link
            to="/courses"
            className="border-2 border-[#0F6FFF] text-[#0F6FFF] hover:bg-[#0F6FFF] hover:text-white transition duration-300 font-bold px-8 py-4 rounded-[14px] text-[18px]"
          >
            Explore More Courses
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ThankYou;