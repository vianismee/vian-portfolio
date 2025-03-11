"use client";

import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<string>("");

  const formatTime = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  const convertTo12HourFormat = (
    hh: number
  ): { hh: number; period: string } => {
    const period = hh >= 12 ? "PM" : "AM";
    hh = hh % 12;
    hh = hh ? hh : 12;
    return { hh, period };
  };

  const updateTime = () => {
    const today = new Date();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = today.getSeconds();
    const { hh: formattedHH } = convertTo12HourFormat(hh);

    const formattedTime = `${formatTime(formattedHH)}:${formatTime(
      mm
    )}:${formatTime(ss)}`;
    setTime(formattedTime);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  });

  return <p>{time}</p>;
}
