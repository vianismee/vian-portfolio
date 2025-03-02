import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="w-full flex flex-col gap-[30px]">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[28pt] inline-flex gap-7">
          <span className="self-center">
            <BriefcaseBusiness size={45} />
          </span>
          Work Experience
        </h1>
        <p className="text-[16pt] font-medium text-primary/50">
          Navigate my experience at Skincare & Cosmetic Manufacture Industry
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </div>
      <div className="flex flex-col w-full bg-secondary border-2 border-primary/10 h-min px-[30px] py-[24px] rounded-3xl gap-4">
        <div className="flex flex-row gap-5 justify-between items-center">
          <div className="flex flex-row gap-5">
            <div className="aspect-square bg-primary-foreground flex p-3 self-center rounded-2xl border-2 border-primary/10">
              <Image
                src={"/kitoshindo.svg"}
                height={60}
                alt="Kitoshindo Logo"
                width={60}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-[18pt]">Kitoshindo</h1>
              <p className="font-medium text-[14pt] text-primary/40">
                PT. Kitoshindo International Biotech
              </p>
            </div>
          </div>
          <h1 className="font-bold text-[18pt]">2025 - Present</h1>
        </div>
        <div className="w-full bg-primary-foreground px-[30px] py-[25px] rounded-lg space-y-[10px]">
          <h1 className="text-[14pt] font-bold">Product Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            iure dolore adipisci, et nobis neque atque nisi natus molestias
            dolores cum possimus velit nam quidem obcaecati impedit, doloribus,
            assumenda tenetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
