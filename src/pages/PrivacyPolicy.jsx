import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">

      <section className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-8 py-14">

        <div className="bg-white rounded-[28px] shadow-md p-6 sm:p-10 lg:p-14">

          <h1 className="text-[34px] sm:text-[46px] font-bold text-black">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Last Updated: May 2026
          </p>

          <div className="mt-10 space-y-10 text-[#444] leading-8">

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Introduction
              </h2>

              <p>
                Codify Institute values your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and protect the information
                you provide through our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Information We Collect
              </h2>

              <p>
                We may collect personal information including your name,
                phone number, email address, payment information, and
                course enquiry details when you interact with our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to enquiries and provide support</li>
                <li>To process payments and enrollments</li>
                <li>To improve our services and training programs</li>
                <li>To send important course-related communication</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Payment Information
              </h2>

              <p>
                Payments are securely processed through trusted third-party
                payment gateways such as Razorpay. We do not store your
                debit card, credit card, or banking details on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Data Security
              </h2>

              <p>
                We implement reasonable security measures to protect your
                information against unauthorized access, misuse, or
                disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Third-Party Services
              </h2>

              <p>
                Our website may use third-party tools and services including
                Google Maps, EmailJS, and Razorpay for operational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Contact Us
              </h2>

              <p>
                Codify Institute
                <br />
                Shop No 212 / 213, Gold Crest 369, Above Zudio,
                New Viva College Road, Virar West,
                Maharashtra 401303
                <br />
                Email: codifyinstitute.com@gmail.com
                <br />
                Phone: +91 7759020121
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PrivacyPolicy;