import { useParams } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

const CourseDetail = () => {
  const { slug } = useParams();

  const course = coursesData.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="py-32 text-center text-3xl font-bold">
        Course Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
              {course.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              {course.description}
            </p>

            <div className="flex gap-8 mt-8 text-gray-700">
              <div>{course.duration}</div>
              <div>{course.level}</div>
            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
              Enroll Now
            </button>
          </div>

          {/* Right */}
          <div className="bg-gradient-to-r from-[#5b5fc7] to-[#4ea1ff] rounded-[30px] p-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        {/* <div className="bg-white rounded-xl p-4 mb-12 flex gap-10 font-semibold overflow-x-auto">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2 whitespace-nowrap">
            Overview
          </button>

          <button className="text-gray-700 whitespace-nowrap">
            Curriculum
          </button>

          <button className="text-gray-700 whitespace-nowrap">
            Tools
          </button>
        </div> */}

        <h2 className="text-4xl font-bold mb-16">
          Courses Overview
        </h2>

        <div className="grid lg:grid-cols-[1fr_350px] gap-12">

          {/* Learn */}
          <div>
            <h3 className="text-4xl font-bold mb-10">
              What you Will Learn
            </h3>

            <div className="space-y-6">
              {course.learn.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 text-xl font-medium text-gray-800"
                >
                  <span className="text-blue-600">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-[#ececf5] rounded-3xl p-8 shadow-sm h-fit sticky top-24">

            <h3 className="text-3xl font-bold mb-8">
              Course Highlights
            </h3>

            <div className="space-y-8">

              <div>
                <div className="font-bold text-xl">
                  Duration
                </div>

                <div className="text-gray-600">
                  {course.duration}
                </div>
              </div>

              <div>
                <div className="font-bold text-xl">
                  Level
                </div>

                <div className="text-gray-600">
                  {course.level}
                </div>
              </div>

              <div>
                <div className="font-bold text-xl">
                  Language
                </div>

                <div className="text-gray-600">
                  {course.language}
                </div>
              </div>

              <div>
                <div className="font-bold text-xl">
                  Projects
                </div>

                <div className="text-gray-600">
                  {course.projects}
                </div>
              </div>

              <div>
                <div className="font-bold text-xl">
                  Certificates
                </div>

                <div className="text-gray-600">
                  {course.certificate}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center mb-10">
            Tools You'll Master
          </h2>

          <div className="bg-[#edf2f7] rounded-2xl p-8 flex flex-wrap justify-center gap-6">
            {course.tools.map((tool, i) => (
              <div
                key={i}
                className="bg-white px-6 py-4 rounded-xl shadow-sm font-semibold"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default CourseDetail;