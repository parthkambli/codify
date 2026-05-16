// src/pages/Contact.jsx

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-x-hidden">

      {/* MAIN SECTION */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-20">

        {/* TITLE */}
        <h1 className="text-center text-[34px] sm:text-[48px] lg:text-[60px] font-bold text-black">
          Get in Touch!
        </h1>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-14">

          {/* CARD 1 */}
          <div className="bg-[#EAF3FF] rounded-[18px] shadow-md min-h-[250px] flex flex-col items-center justify-center text-center px-6 py-10">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
              <FaPhoneAlt className="text-[#0F6FFF] text-[34px]" />
            </div>

            {/* TITLE */}
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#222]">
              Call us
            </h2>

            {/* TEXT */}
            <a
              href="tel:+917759020121"
              className="mt-6 text-[20px] sm:text-[24px] font-semibold underline text-black break-all"
            >
              +91 7759020121
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#EAF3FF] rounded-[18px] shadow-md min-h-[250px] flex flex-col items-center justify-center text-center px-6 py-10">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
              <FaEnvelope className="text-[#0F6FFF] text-[34px]" />
            </div>

            {/* TITLE */}
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#222]">
              Mail us
            </h2>

            {/* EMAIL */}
            <a
              href="mailto:codifyinstitute.com@gmail.com"
              className="mt-6 text-[18px] sm:text-[22px] font-semibold underline text-black break-all"
            >
              codifyinstitute.com@gmail.com
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#EAF3FF] rounded-[18px] shadow-md min-h-[250px] flex flex-col items-center justify-center text-center px-6 py-10">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
              <FaMapMarkerAlt className="text-red-500 text-[34px]" />
            </div>

            {/* TITLE */}
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#222]">
              Address
            </h2>

            {/* ADDRESS */}
            <p className="mt-6 text-[18px] sm:text-[22px] leading-[34px] font-medium text-black">
              Shop No 212 / 213, Gold Crest 369, Above Zudio, New Viva College Road, Virar West, Maharashtra 401303
            </p>
          </div>

        </div>

        {/* FIND US */}
        <div className="mt-24">

          {/* TITLE */}
          <h2 className="text-center text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-[#222]">
            Find Us
          </h2>

          {/* MAP CONTAINER */}
          <div className="mt-12 flex justify-center">

            <div className="w-full max-w-[900px] bg-[#EAF3FF] rounded-[20px] shadow-md p-4 sm:p-5">

              {/* GOOGLE MAP */}
              <div className="rounded-[18px] overflow-hidden">

                <iframe
                  title="Codify Institute Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.3544703799699!2d72.80044688797226!3d19.460103419160276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa26586e4425%3A0x2fe18546613f7f18!2sGold%20Crest%20369!5e0!3m2!1sen!2sin!4v1778926204931!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[520px]"
                ></iframe>

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;