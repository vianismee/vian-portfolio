import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="flex mx-auto flex-row flex-nowrap gap-[30px] w-full items-center">
      <div className="flex h-min rounded-2xl overflow-hidden aspect-square">
        <div className="bg-zinc-600 h-[500px] w-[500px]"></div>
      </div>
      <div className="flex flex-col w-full gap-1 h-full">
        <div>
          <p className="text-primary/80 text-[calc(32pt/1.8)] font-medium">
            {" "}
            Hallo there, I'am
          </p>
          <h1 className="text-primary text-[32pt] font-bold">Chevian B. S.</h1>
          <p className="text-primary/80 text-[16pt] text-warp w-full">
            {" "}
            Experience on Cosmetic & Skincare Manufacture as Quality Control,
            Research & Development, New Product Development & Packaging
            Designer.
          </p>
        </div>
        <div className="w-full flex flex-row h-full items-center">
          <Button
            variant={"secondary"}
            className="text-[12pt] px-[20px] py-[25px] font-medium rounded-[10px] text-primary/80 hover:text-primary"
          >
            <FileText className="self-center" /> DOWNLIAD MY CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
