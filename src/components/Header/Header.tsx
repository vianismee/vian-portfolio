"use client";
import React from "react";
import LocalTime from "../ui/local-time";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-full border-zinc-700 border-b-[2px] py-6 px-[200px] flex justify-between items-center"
    >
      <div className="flex items-center gap-4 px-[18px] py-[13px] bg-primary-foreground rounded-2xl">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
        <span className="inline-flex items-baseline gap-2">
          <span className="font-medium">
            Designer at {""}
            <a
              href="https://kitoshindo.com/"
              className="font-bold hover:underline hover:text-sky-500 transition delay-50 ease-in-out"
            >
              Kitoshindo
            </a>
          </span>
          <Image
            src={"/kitoshindo.svg"}
            alt="Kitoshindo Logo"
            width={34}
            height={16}
            className="self-center"
          />
        </span>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-primary font-medium">Local Time</h1>
        <span className="font-bold px-[18px] py-[13px] bg-primary-foreground rounded-xl flex w-[110px] justify-center border-secondary border">
          <LocalTime />
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
