import React from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-col item-center flex-none flex-nowrap justify-start overflow-visible relative w-ful gap-[20px]">
      <div className="flex md:flex-row flex-none flex-nowrap gap-[20px] items-start relative overflow-hidden">
        <div className="aspect-auto flex-none w-auto h-auto relative rounded-lg overflow-clip">
          <div className="h-[300px] w-[300px] bg-amber-200"></div>
        </div>
        <div className="flex flex-none flex-col gap-1 p-0 w-full h-auto relative">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-primary/80 text-[calc(30pt/1.8)]">
              Hello, I'am
            </p>
            <h1 className="font-bold text-[32pt]">Chevian B. S.</h1>
            <p className="font-medium text-primary/80 text-[calc(30pt/1.8)]">
              I'am a
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
