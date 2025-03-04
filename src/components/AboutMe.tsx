import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="flex mx-auto flex-row flex-nowrap gap-[30px] w-full items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
        }}
        className="flex h-min rounded-2xl overflow-hidden aspect-square"
      >
        <div className="bg-zinc-600 h-[500px] w-[500px]"></div>
      </motion.div>
      <div className="flex flex-col w-full h-full gap-[30px]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary/80 text-[calc(32pt/1.8)] font-medium"
          >
            Hallo there, I Am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary text-[35pt] font-bold"
          >
            Chevian B. S.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary/80 text-[16pt] text-warp w-full"
          >
            Experience on Cosmetic & Skincare Manufacture as Quality Control,
            Research & Development, New Product Development & Packaging
            Designer.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.7,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full flex flex-row h-full items-center flex-nowrap"
        >
          <div>
            <Button
              effect={"expandIcon"}
              icon={FileText}
              iconPlacement="right"
              variant={"default"}
              className="hover:bg-sky-500 bg-secondary text-primary p-5"
              size={"lg"}
            >
              DOWNLOAD MY CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
