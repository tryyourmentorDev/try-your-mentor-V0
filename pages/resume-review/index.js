import React from "react";

const ResumeReview = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="mt-24 container mx-auto px-4 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
            Unlock more opportunities <br />
            with a standout resume.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover what your resume lacks, capture recruiter attention, and
            secure more interviews.
          </p>
          <button className="bg-[#5e17eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4c13c6] transition">
            Start your resume review now →
          </button>
        </div>
      </section>

      <section className="mt-36 container mx-auto px-4 md:px-16 lg:px-32">
        <h2
          className="text-center font-bold mb-4"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "2.5rem" }}
        >
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center items-center bg-[#5e17eb] text-white w-16 h-16 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 10-8 0 4 4 0 008 0zM12 14v7m-6-7a6 6 0 0112 0v7H6v-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">
              Reviews by seasoned experts
            </h3>
            <p className="text-gray-600">
              Receive insights from industry leaders and hiring professionals
              who have reviewed countless resumes.
            </p>
          </div>
          {/* Add other features similarly */}
        </div>
      </section>
    </main>
  );
};

export default ResumeReview;
