import { FaBell, FaGlobe } from "react-icons/fa";

export default function SecondaryNavbar() {
  return (
    <div className="w-full bg-white shadow px-4 py-3">
      <div className="grid grid-cols-10 items-center gap-4">
        {/* Search Bar (start) */}
        <div className="col-span-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Spacer (middle) */}
        <div className="col-span-4" />

        {/* Icons + Avatar (end) */}
        <div className="col-span-3 flex items-center justify-end gap-4">
          <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg" />
          <FaGlobe className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg" />
          <div className="w-8 h-8 bg-blue-600 text-white text-sm font-bold flex items-center justify-center rounded-full">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
