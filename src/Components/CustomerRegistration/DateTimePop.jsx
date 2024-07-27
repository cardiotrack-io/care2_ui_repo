import React, { useState, useEffect } from "react";

const TimePicker = ({ appointmentDate, onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    generateAvailableTimes();
  }, [appointmentDate]);

  const generateAvailableTimes = () => {
    const times = [];
    const currentTime = new Date();
    const selectedDate = new Date(appointmentDate);
    const isToday = selectedDate.toDateString() === currentTime.toDateString();

    for (let hour = 6; hour <= 22; hour++) {
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const period = hour >= 12 ? "PM" : "AM";
      if (!isToday || (isToday && hour > currentTime.getHours())) {
        times.push(`${formattedHour}:00 ${period}`);
      }
      if (
        hour !== 23 &&
        (!isToday || (isToday && hour > currentTime.getHours()))
      ) {
        times.push(`${formattedHour}:30 ${period}`);
      }
    }
    setAvailableTimes(times);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onTimeChange(time);
  };

  return (
    <div className="flex justify-center items-center text-darkBlue">
      <select
        value={selectedTime}
        onChange={handleTimeChange}
        // onChange={(e) => setSelectedTime(e.target.value)}
        className="p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
