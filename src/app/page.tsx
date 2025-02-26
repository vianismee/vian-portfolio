"use client";

import React from "react";
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
