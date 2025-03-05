import { myStack } from "@/data";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Stack = () => {
  return (
    <section className="w-full flex flex-col gap-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.15, duration: 0.3 },
        }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col gap-3"
      >
        <h1 className="font-bold text-[28pt] inline-flex gap-7">
          <span className="self-center">
            <Zap size={45} />
          </span>
          My Stack
        </h1>
        <p className="text-[16pt] font-medium text-primary/50 mb-3">
          Creative and modern toolbox that combines both design and development
          powerhouses
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </motion.div>
      <div className="w-full">
        <ul className="grid grid-rows-[repeat(2,min-content)] grid-cols-[repeat(2,minmax(50px,1fr))] gap-4">
          {myStack.map((stack, index) => (
            <>
              <Link href={`https://www.${stack.link}`} key={stack.id}>
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: (index / myStack.length) * 1,
                      duration: 0.4,
                    },
                  }}
                  viewport={{
                    amount: 0.15,
                  }}
                  className="h-min bg-secondary/10 group hover:bg-secondary px-[20px] py-[20px] rounded-3xl border-2 border-primary/10 flex flex-row gap-4 cursor-pointer"
                >
                  <div className="h-[100px] w-[100px]">
                    <div className="aspect-square bg-primary-foreground/10 group-hover:bg-primary-foreground flex p-3 self-center rounded-2xl border-2 border-primary/10 items-center justify-center">
                      <Image
                        src={`/${stack.icon}`}
                        height={60}
                        alt={`${stack.title}`}
                        width={60}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="font-bold text-[18pt] group-hover:text-sky-400">
                      {stack.title}
                    </h1>
                    <p className="text-[14pt] text-primary/50">{stack.desc}</p>
                  </div>
                </motion.li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stack;
