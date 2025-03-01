"use client";

import React from "react";
import { meOnNumber } from "./../data/index";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const MyHighligh = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
        delay: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className="border-y-[2px] border-dotted border-primary/15 py-[20px] px-[10px] h-min"
    >
      <div className="flex flex-row flex-nowrap justify-center space-x-[10px]">
        {meOnNumber.map((data) => {
          return (
            <div
              className="flex flex-col basis-1/3 items-center text-center gap-2"
              key={data.id}
            >
              <h1 className="font-bold text-[27pt]">
                <CountUp end={data.number} delay={0.8} duration={3} />+
              </h1>
              <p className="text-[16pt] text-primary/50">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default MyHighligh;
