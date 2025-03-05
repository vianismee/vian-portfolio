import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import Image from "next/image";
import { myExperience } from "@/data";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { delay, motion } from "framer-motion";

const Experience = () => {
  const reverseExperience = [...myExperience].reverse();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.9,
          type: "spring",
          stiffness: 100,
        }}
        className="w-full flex flex-col gap-[30px]"
      >
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[28pt] inline-flex gap-7">
            <span className="self-center">
              <BriefcaseBusiness size={45} />
            </span>
            Work Experience
          </h1>
          <p className="text-[16pt] font-medium text-primary/50 mb-3">
            Navigate my experience at Skincare & Cosmetic Manufacture Industry
          </p>
          <div className="border-b-[2px] border-dotted border-primary/15"></div>
        </div>
        {reverseExperience.map((exp, index) => (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: (index / reverseExperience.length) * 0.4,
                  duration: 0.3,
                },
              }}
              viewport={{
                amount: 0.15,
              }}
              className="flex flex-col flex-nowrap w-full bg-secondary border-2 border-primary/10 h-min px-[30px] py-[24px] rounded-3xl gap-4"
              key={exp.id}
            >
              <div className="flex flex-row gap-5 justify-between items-center">
                <div className="flex flex-row gap-5">
                  <div className="aspect-square bg-primary-foreground flex p-3 self-center rounded-2xl border-2 border-primary/10">
                    <Image
                      src={`/${exp.logo}`}
                      height={60}
                      alt={exp.company}
                      width={60}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-[18pt]">{exp.profile}</h1>
                    <p className="font-medium text-[14pt] text-primary/40">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <h1 className="font-bold text-[18pt]">{exp.year}</h1>
              </div>
              <div className="w-full bg-primary-foreground px-[30px] py-[25px] rounded-lg space-y-[10px]">
                <>
                  <Timeline defaultValue={10}>
                    {exp.jobdesk
                      .sort((a, b) => b.id - a.id)
                      .map((job) => (
                        <TimelineItem key={job.id} step={job.id}>
                          <TimelineHeader>
                            <TimelineSeparator />
                            <TimelineDate>{job.date}</TimelineDate>
                            <TimelineTitle>{job.title}</TimelineTitle>
                            <TimelineIndicator />
                          </TimelineHeader>
                          <TimelineContent>{job.desc}</TimelineContent>
                        </TimelineItem>
                      ))}
                  </Timeline>
                </>
              </div>
            </motion.div>
          </>
        ))}
      </motion.section>
    </>
  );
};

export default Experience;
