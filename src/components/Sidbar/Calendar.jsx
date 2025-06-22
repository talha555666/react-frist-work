import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function Calendar() {
  const [month, setMonth] = useState(5); // June (0-indexed)
  const [year, setYear] = useState(2025);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(prev => prev - 1);
    } else {
      setMonth(prev => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(prev => prev + 1);
    } else {
      setMonth(prev => prev + 1);
    }
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth}>
          <FaChevronLeft className="text-gray-600 hover:text-blue-600" />
        </button>
        <h2 className="text-lg font-semibold">
          {monthNames[month]} {year}
        </h2>
        <button onClick={nextMonth}>
          <FaChevronRight className="text-gray-600 hover:text-blue-600" />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-2">
        {days.map((d, idx) => (
          <div key={idx}>{d}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 text-center text-sm gap-y-1">
        {calendarDays.map((day, idx) => (
          <div key={idx} className="h-8 flex items-center justify-center">
            {day ? (
              <span className="text-gray-800">{day}</span>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
