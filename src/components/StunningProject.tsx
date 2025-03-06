import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { stunningProject } from "@/data";

export const StunningProject = () => {
  return (
    <section className="flex flex-col flex-nowrap h-min gap-[30px]">
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
            <Rocket size={45} />
          </span>
          Stunning Project
        </h1>
        <p className="text-[16pt] font-medium text-primary/50 mb-3">
          Explore a collection of my project
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </motion.div>
      <div className="w-full flex flex-col gap-[20px]">
        {stunningProject.map((project, index) => (
          <React.Fragment key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: (index / stunningProject.length) * 0.5,
                  duration: 0.9,
                },
              }}
              viewport={{
                amount: 0.2,
              }}
              className="w-full flex flex-row gap-5"
              key={project.id}
            >
              <div className="rounded-3xl flex flex-row">
                <div className="aspect-[16/9] w-[500px] bg-white/10 rounded-2xl"></div>
              </div>
              <div className="py-[30px] px-[40px] flex flex-col w-full bg-primary-foreground rounded-2xl gap-[15px]">
                <div className="flex flex-nowrap items-center justify-between">
                  <h1 className="font-bold text-[22pt]">{project.title}</h1>
                  <Button>Hello World</Button>
                </div>
                <div className="border-y-2 py-[15px] flex flex-row gap-[30px] items-center">
                  <div className="px-4">
                    <p className="font-medium text-primary/60">
                      {project.tools}
                    </p>
                  </div>
                  <div className="flex flex-row gap-[15px]">
                    {project.tag.map((tag, tagIndex) => (
                      <p
                        className="bg-sky-400/10 px-[16px] py-[4px] rounded-full border-1 border-sky-400"
                        key={`${tag}-${tagIndex}`}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary/50">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
