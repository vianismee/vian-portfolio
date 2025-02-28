"use client";

import AboutMe from "@/components/AboutMe";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-1 gap-0 h-min overflow-hidden px-0 flex-nowrap font-[family-name:var(--font-space-grotesk)] mx-auto w-full justify-center py-10">
      <AboutMe />
    </div>
  );
}
