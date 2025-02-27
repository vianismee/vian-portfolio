"use client";

import React, { useState, useEffect } from "react";

import { socialMedia } from "@/data";
import Link from "next/link";
import { ModeToggle } from "../ui/dark-light";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="w-full border-zinc-700 border-t-[2px] py-6 px-[200px] flex justify-between items-center">
      <div className="flex items-center gap-4 px-[18px] py-[13px] bg-primary-foreground rounded-2xl">
        <h1 className="font-medium">©{year} made by Vianismee</h1>
      </div>
      <div className="flex items-center gap-4 justify-between">
        <h1 className="text-primary font-medium">Follow me on</h1>
        <ul className="flex gap-2">
          {socialMedia.map((social) => (
            <li className="" key={social.id}>
              <Link href={social.href}>{social.icon}</Link>
            </li>
          ))}
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
