// src/components/MyProgress.jsx

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { name: "Completed", value: 100 },
  { name: "Remaining", value: 0 }, // for visual balance
];

const COLORS = ["#3b82f6", "#e5e7eb"]; // blue & gray

export default function MyProgress() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">My Progress</h2>
      <p className="text-sm text-gray-500 mb-4">Total hour: <span className="font-medium">6h 32min</span></p>

      {/* Chart */}
      <div className="h-40 w-full mb-4">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={progressData}
              innerRadius={50}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Progress List */}
      <div className="space-y-4 text-sm text-gray-700">
        <div className="flex justify-between items-center">
          <span>60/60</span>
          <span className="text-green-600 font-medium">Completed</span>
        </div>
        <div className="flex justify-between items-center">
          <span>60/60</span>
          <span className="text-green-600 font-medium">Completed</span>
        </div>
        <div className="flex justify-between items-center">
          <span>60/60</span>
          <span className="text-green-600 font-medium">Completed</span>
        </div>
      </div>
    </section>
  );
}
