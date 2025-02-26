import React from "react";
import { ModeToggle } from "./../ui/dark-light";

const Dashboard = () => {
  return (
    <div className="w-full px-[200px] flex flex-col justify-center items-center h-dvh gap-2">
      <h1 className="font-bold text-[40pt]">Welcome to Vian Portfolio</h1>
      <p className="text-primary/80 text-[calc(40pt/1.618)]">
        Come back latter
      </p>
      <ModeToggle />
    </div>
  );
};

export default Dashboard;
