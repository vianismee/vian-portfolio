"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import type { Guest } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const GuestList = () => {
  const [guest, setGuest] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getGuest = async () => {
      try {
        const response = await axios.get("/api/guest");
        setGuest(response.data); // ✅ Simpan hanya response.data
      } catch (error) {
        setError((error as TypeError).message);
      } finally {
        setLoading(false);
      }
    };

    getGuest();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s]">
        {guest.map((guest) => (
          <figure
            key={guest.id}
            className={cn(
              "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {guest.name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  @{guest.username}
                </p>
              </div>
            </div>
            <blockquote className="mt-2 text-sm">{guest.desc}</blockquote>
          </figure>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default GuestList;
