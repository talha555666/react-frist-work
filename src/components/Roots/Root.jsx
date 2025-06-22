// src/layout/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import MiddleSection from "../MidilSection/MiddleSection";
import Chart from "../Chart/Chart";
import Card2 from "../Chart/Card2";
import Calendar from "../Sidbar/Calendar";
import Assignments from "../Sidbar/Assignments";
import MyProgress from "../Sidbar/MyProgress";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Header />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <SecondaryNavbar />

        {/* Page Content */}
        <main className="flex-grow p-6">
          <Outlet />

          {/* Dashboard Layout */}
          <section className="mt-6 grid grid-cols-1 md:grid-cols-10 gap-6">
            {/* 🔹 Left Content (7 columns) */}
            <div className="md:col-span-7 space-y-6">
              <MiddleSection />
              <Chart />
              <Card2 />
            </div>

            {/* 🔸 Right Sidebar Calendar (3 columns) */}
            <div className="col-span-10 md:col-span-3">
              <Calendar />
              <Assignments />
              <MyProgress />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
