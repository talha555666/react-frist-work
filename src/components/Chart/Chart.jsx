// src/components/Chart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Completed", value: 155 },
  { name: "Certificates", value: 39 },
  { name: "In Progress", value: 25 },
  { name: "Support", value: 18000 },
];

export default function Chart() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full h-80">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
