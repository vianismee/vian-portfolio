"use client";

import AboutMe from "@/components/AboutMe";
import React from "react";
import Experience from "@/components/Experience";
import Stack from "./../components/Stack";
import MyHighligh from "./../components/MyHighligh";
import { StunningProject } from "@/components/StunningProject";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-[100px] h-min px-0 flex-nowrap font-[family-name:var(--font-space-grotesk)] mx-[370px] justify-center py-10">
      <AboutMe />
      <MyHighligh />
      <Experience />
      <Stack />
      <StunningProject />
    </div>
  );
}
