import React from "react";
// import { ModeToggle } from "../ui/dark-light";
import { motion } from "framer-motion";

const Onboard = () => {
  return (
    <div className="w-full px-[200px] flex flex-col justify-center items-center h-dvh gap-2">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="text-primary text-[40pt] font-bold"
      >
        Welcome to Vian Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="text-primary/80 text-[calc(38pt/1.618)] text-center"
      >
        Website on progress{" "}
        <span className="hover:text-sky-400 hover:font-bold hover:underline">
          Development
        </span>
        , <br /> Come Back Latter!
      </motion.p>
    </div>
  );
};

export default Onboard;
