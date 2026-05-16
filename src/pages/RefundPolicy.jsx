import React from "react";

const RefundPolicy = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">

      <section className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-8 py-14">

        <div className="bg-white rounded-[28px] shadow-md p-6 sm:p-10 lg:p-14">

          <h1 className="text-[34px] sm:text-[46px] font-bold text-black">
            Refund & Cancellation Policy
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Last Updated: May 2026
          </p>

          <div className="mt-10 space-y-10 text-[#444] leading-8">

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Course Enrollment
              </h2>

              <p>
                Once a student enrolls in a course and payment is
                successfully completed, the enrollment process is initiated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Refund Eligibility
              </h2>

              <p>
                Refund requests may be considered only if submitted within
                3 days of payment and before access to training materials,
                classes, or recorded content is provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Non-Refundable Cases
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>After course access has been provided</li>
                <li>After attending live sessions or offline classes</li>
                <li>For downloadable resources or shared study materials</li>
                <li>For incomplete attendance by the student</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Refund Processing
              </h2>

              <p>
                Approved refunds will be processed within 7 to 10 business
                days through the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Cancellation
              </h2>

              <p>
                Codify Institute reserves the right to cancel or reschedule
                batches due to operational reasons. In such cases,
                alternative batches or suitable resolutions will be provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Contact Information
              </h2>

              <p>
                Email: codifyinstitute.com@gmail.com
                <br />
                Phone: +91 9028793459
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default RefundPolicy;