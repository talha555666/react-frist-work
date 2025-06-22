// src/components/TopCourses.jsx

import { FaUser, FaClock, FaBookOpen, FaStar } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    category: "Development",
    instructor: "Albert James",
    lessons: 24,
    hours: 40,
    rating: 4.9,
    reviews: "12k",
    image: "https://img.freepik.com/free-photo/web-design-concept_23-2150376785.jpg",
  },
  {
    title: "UI/UX Design Essentials",
    category: "Design",
    instructor: "Sara Khan",
    lessons: 18,
    hours: 32,
    rating: 4.8,
    reviews: "9k",
    image: "https://img.freepik.com/free-vector/user-interface-design_23-2148633585.jpg",
  },
  {
    title: "React & Tailwind Mastery",
    category: "Development",
    instructor: "Rifat Hasan",
    lessons: 20,
    hours: 36,
    rating: 4.7,
    reviews: "7.5k",
    image: "https://img.freepik.com/free-vector/responsive-web-design-concept_23-2148585206.jpg",
  },
];

export default function Card2() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Top Courses Pick for You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[500px] transition hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category */}
              <p className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded-full uppercase w-max mb-2">
                {course.category}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
                {course.title}
              </h3>

              {/* Instructor */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FaUser className="text-gray-500" />
                <span>Created by {course.instructor}</span>
              </div>

              {/* Meta Info */}
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <FaBookOpen /> {course.lessons} Lessons
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {course.hours} Hours
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 gap-1 text-sm mb-4">
                <FaStar />
                {course.rating} ({course.reviews})
              </div>

              {/* Button Bottom Right */}
              <div className="text-right mt-auto">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
