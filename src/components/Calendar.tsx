"use client";

import ReactCalendar from "react-calendar";

export default function Calendar() {
  return (
    <div>
      <ReactCalendar
        minDate={new Date()}
        className="react-calendar"
        view="month"
        onClickDay={(date) => console.log(date)}
      />
    </div>
  );
}
