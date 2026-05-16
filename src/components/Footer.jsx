// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";


// import logo from "../assets/Logo-W.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0F6FFF] text-white mt-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
//           {/* Logo Section */}
//           <div>
//             <img
//               src={logo}
//               alt="Codify Institute"
//               className="w-[380px] mb-6"
//             />

//             <div className="flex items-center justify-center gap-4">
//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="#"
//                 className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>

//           {/* Menu */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Menu</h3>

//             <ul className="space-y-3 text-[15px]">
//               <li>
//                 <a
//                   href="/about"
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   About Us
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/courses"
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Courses
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/contact"
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Contact
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/placement"
//                   className="hover:text-gray-200 transition duration-300"
//                 >
//                   Placement
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Courses */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Courses</h3>

//             <ul className="space-y-3 text-[15px]">
//               <li className="hover:text-gray-200 cursor-pointer transition duration-300">
//                 Full Stack Web Development
//               </li>

//               <li className="hover:text-gray-200 cursor-pointer transition duration-300">
//                 Data Analysis
//               </li>

//               <li className="hover:text-gray-200 cursor-pointer transition duration-300">
//                 Mobile App Development
//               </li>

//               <li className="hover:text-gray-200 cursor-pointer transition duration-300">
//                 Data Science
//               </li>
//             </ul>
//           </div>

//           {/* Office */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Office</h3>

//             <div className="space-y-5 text-[15px]">
//               <div className="flex items-start gap-3">
//                 <FaPhoneAlt className="mt-1 text-sm" />
//                 <span>+91 9028 793 459</span>
//               </div>

//               <div className="flex items-start gap-3 break-all">
//                 <FaEnvelope className="mt-1 text-sm" />
//                 <span>codehubtechnologiespvtltd@gmail.com</span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="mt-1 text-sm" />

//                 <span>
//                   Shop No 212 / 213,
//                   Gold Crest 369,
//                   Above Zudio,
//                   New Viva College Road,
//                   Virar West,
//                   Maharashtra 401303
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Border */}
//         <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/80">
//           © {new Date().getFullYear()} Codify Institute. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;











import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/Logo-W.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F6FFF] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo Section */}
          <div>
            <img
              src={logo}
              alt="Codify Institute"
              className="w-[260px] md:w-[300px] mb-6"
            />

            <div className="flex items-center gap-4">
              <a
                href=""
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white hover:text-[#0F6FFF] transition-all duration-300 flex items-center justify-center text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="/about" className="hover:text-gray-200 transition duration-300">About Us</a></li>
              <li><a href="/courses" className="hover:text-gray-200 transition duration-300">Courses</a></li>
              <li><a href="/placement" className="hover:text-gray-200 transition duration-300">Placement</a></li>
              <li><a href="/contact" className="hover:text-gray-200 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Courses</h3>
            <ul className="space-y-3 text-[15px]">
              <a href="/courses-detail/full-stack-web-development"> <li className="hover:text-gray-200 cursor-pointer transition duration-300">Full Stack Web Development</li>
</a>
<a href="/courses-detail/data-analysis">              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Data Analysis</li>
</a>
<a href="/courses-detail/mobile-app-development">              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Mobile App Development</li>
</a>
<a href="/courses-detail/data-science">              <li className="hover:text-gray-200 cursor-pointer transition duration-300">Data Science</li>
</a>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-200 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-gray-200 transition duration-300">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:text-gray-200 transition duration-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office</h3>
            <div className="space-y-5 text-[15px]">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-sm" />
                <span>+91 9028 793 459</span>
              </div>

              <div className="flex items-start gap-3 break-all">
                <FaEnvelope className="mt-1 text-sm" />
                <span>codehubtechnologiespvtltd@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-sm" />
                <span>
                  Shop No 212 / 213, Gold Crest 369,<br />
                  Above Zudio, New Viva College Road,<br />
                  Virar West, Maharashtra 401303
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Codify Institute. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;