import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaClipboardList,
  FaChalkboardTeacher,
  FaFolderOpen,
  FaEnvelope,
  FaChartBar,
  FaCalendarAlt,
  FaBookReader,
  FaDollarSign,
  FaCog,
  FaUserCog,
  FaLock,
  FaCertificate,
} from "react-icons/fa";

const menu1 = [
  { label: "Dashboard One", icon: <FaTachometerAlt /> },
  { label: "Dashboard Two", icon: <FaTachometerAlt /> },
  { label: "Dashboard Three", icon: <FaTachometerAlt /> },
  { label: "Courses", icon: <FaBook /> },
  { label: "Students", icon: <FaUserGraduate /> },
  { label: "Assignments", icon: <FaClipboardList /> },
  { label: "Mentors", icon: <FaChalkboardTeacher /> },
  { label: "Resources", icon: <FaFolderOpen /> },
];

const menu2 = [
  { label: "Messages", icon: <FaEnvelope /> },
  { label: "Analytics", icon: <FaChartBar /> },
  { label: "Events", icon: <FaCalendarAlt /> },
  { label: "Library", icon: <FaBookReader /> },
  { label: "Pricing", icon: <FaDollarSign /> },
];

const menu3 = [
  { label: "Settings", icon: <FaCog /> },
  { label: "Account Settings", icon: <FaUserCog /> },
  { label: "Authentication", icon: <FaLock /> },
];

const MenuBlock = ({ items }) => (
  <div className="space-y-6">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-5 text-gray-700 hover:text-blue-600 transition text-lg w-full cursor-pointer"
      >
        <span className="text-2xl flex-shrink-0">{item.icon}</span>
        <span className="flex-grow">{item.label}</span>
      </div>
    ))}
  </div>
);

export default function Header() {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md px-6 py-8 flex flex-col justify-between min-h-screen">
      {/* Top Part */}
      <div className="space-y-12">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600 text-center">
          Logo
        </div>

        {/* Menu Sections */}
        <MenuBlock items={menu1} />
        <MenuBlock items={menu2} />
        <MenuBlock items={menu3} />
      </div>

      {/* Bottom CTA Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-6 text-center space-y-3 mt-8">
        <FaCertificate className="text-blue-600 text-4xl mx-auto" />
        <h4 className="text-blue-700 font-semibold text-base">
          Get Pro Certificate
        </h4>
        <p className="text-gray-600 text-sm">
          Explore 400+ courses with lifetime members
        </p>
      </div>
    </aside>
  );
}
