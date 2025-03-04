import { Zap } from "lucide-react";
import React from "react";

const Stack = () => {
  return (
    <section className="w-full flex flex-col gap-[30px]">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-[28pt] inline-flex gap-7">
          <span className="self-center">
            <Zap size={45} />
          </span>
          My Stack
        </h1>
        <p className="text-[16pt] font-medium text-primary/50 mb-3">
          Navigate my experience at Skincare & Cosmetic Manufacture Industry
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </div>
    </section>
  );
};

export default Stack;
