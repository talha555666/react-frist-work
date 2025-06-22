import {
  FaCheckCircle,
  FaCertificate,
  FaHourglassHalf,
  FaUsers,
} from "react-icons/fa";

export default function MiddleSection() {
  const stats = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-4xl" />,
      number: "155+",
      label: "Completed Courses",
    },
    {
      icon: <FaCertificate className="text-green-600 text-4xl" />,
      number: "39+",
      label: "Earned Certificate",
    },
    {
      icon: <FaHourglassHalf className="text-yellow-500 text-4xl" />,
      number: "25+",
      label: "Course in Progress",
    },
    {
      icon: <FaUsers className="text-purple-600 text-4xl" />,
      number: "18k+",
      label: "Community Support",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon, number, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center bg-white shadow-md rounded-lg p-6 text-center h-44"
          >
            <div>
              <h3 className="text-3xl font-bold">{number}</h3>
              <p className="text-gray-600 text-sm mt-1">{label}</p>
            </div>
            <div className="mt-4">{icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
