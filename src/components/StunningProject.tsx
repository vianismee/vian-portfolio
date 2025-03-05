import { delay, motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React from "react";

export const StunningProject = () => {
  return (
    <section className="flex flex-col flex-nowrap h-min gap-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            duration: 0.4,
          },
        }}
        viewport={{
          amount: 0.1,
        }}
        className="flex flex-col gap-3"
      >
        <h1 className="font-bold text-[28pt] inline-flex gap-7">
          <span className="self-center">
            <Rocket size={45} />
          </span>
          Stunning Project
        </h1>
        <p className="text-[16pt] font-medium text-primary/50 mb-3">
          Explore a collection of my project
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </motion.div>
      <div className="w-full">
        <div className="bg-zinc-600 px-[15px] py-[15px] rounded-lg flex flex-row">
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
