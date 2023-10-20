import React from "react";

function CurrentDate() {
  const currentDateTime = new Date();
  const currentMonth = currentDateTime.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = monthNames[currentMonth];
  const currentDate = currentDateTime.getDate();
  const currentDay = currentDateTime.getDay();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayName = dayNames[currentDay];
  return (
    <div className="shadowed-box rounded-[1.2rem] text-center pb-4">
      <div className="bg-danger-dark rounded-t-[1.2rem] p-2 text-white text-2xl tracking-wide font-bold uppercase">
        {currentMonthName}
      </div>
      <div className="[font-size:5rem] font-bold">{currentDate}</div>
      <div className="text-lg">{currentDayName}</div>
    </div>
  );
}

export default CurrentDate;
