"use client";

import React, { useEffect, useState } from "react";
import DarkMode from "@/components/ui/dark-light";
import LocalTime from "@/components/ui/local-time";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="@container">
      <div className="grid grid-row font-[family-name:var(--font-space-grotesk)]">
        <Header />
        <h1 className="text-[40pt] font-bold">We Will Get</h1>
        <LocalTime></LocalTime>
        <DarkMode></DarkMode>
      </div>
    </div>
  );
}
