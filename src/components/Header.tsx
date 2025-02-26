import React from "react";
import LocalTime from "./ui/local-time";

const Header = () => {
  return (
    <div className="w-full border-zinc-700 border-b-[2px] py-6 px-[200px] flex justify-between items-center">
      <div className="flex items-center gap-4 px-[18px] py-[13px] bg-primary-foreground rounded-2xl">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
        <h1 className="font-bold">Work In Progress</h1>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-primary font-medium">Live Time</h1>
        <span className="font-bold px-[18px] py-[13px] bg-primary-foreground rounded-xl flex w-[110px] justify-center border-secondary border">
          <LocalTime />
        </span>
      </div>
    </div>
  );
};

export default Header;
