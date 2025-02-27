"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Onboard from "@/components/OnBoard/OnBoard";
import React from "react";

export default function Home() {
  return (
    <div className="@container">
      <div className="grid grid-row font-[family-name:var(--font-space-grotesk)]">
        <Header />
        <Onboard />
        <Footer />
      </div>
    </div>
  );
}
