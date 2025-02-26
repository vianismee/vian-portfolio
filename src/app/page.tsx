"use client";

import React, { useEffect, useState } from "react";
import LocalTime from "@/components/ui/local-time";
import Header from "@/components/Header";
import Dashboard from "./../components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="@container">
      <div className="grid grid-row font-[family-name:var(--font-space-grotesk)]">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
