"use client";

import AboutMe from "@/components/AboutMe";
import React from "react";

export default function Home() {
  return (
    <div className="@container">
      <div className="grid grid-row font-[family-name:var(--font-space-grotesk)]">
        <div className="min-h-[100vh] py-10 px-[300px]">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
