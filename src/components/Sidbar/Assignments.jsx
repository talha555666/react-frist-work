// src/components/Assignments.jsx

import { FaClipboardCheck, FaCode, FaPaintBrush } from "react-icons/fa";

const assignments = [
  {
    title: "Do The Research",
    due: "Due in 9 days",
    icon: <FaClipboardCheck className="text-blue-600 text-xl" />,
  },
  {
    title: "PHP Development",
    due: "Due in 2 days",
    icon: <FaCode className="text-green-600 text-xl" />,
  },
  {
    title: "Graphic Design",
    due: "Due in 5 days",
    icon: <FaPaintBrush className="text-pink-500 text-xl" />,
  },
];

export default function Assignments() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Assign</h2>
        <button className="text-blue-600 text-sm hover:underline">See All</button>
      </div>

      <div className="space-y-4">
        {assignments.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition"
          >
            {item.icon}
            <div>
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">{item.due}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
