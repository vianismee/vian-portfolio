import { BookHeart } from "lucide-react";
import React from "react";
import { GuestList } from "./GuestList";
import { GuestForm } from "./guestform";

const Guestbook = () => {
  return (
    <section className="w-full flex flex-col gap-[30px]">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-[28pt] inline-flex gap-7">
          <span className="self-center">
            <BookHeart size={45} />
          </span>
          Guestbook
        </h1>
        <p className="text-[16pt] font-medium text-primary/50 mb-3">
          Dont forget to reach my Portfolio
        </p>
        <div className="border-b-[2px] border-dotted border-primary/15"></div>
      </div>
      <GuestList />
      <GuestForm />
    </section>
  );
};

export default Guestbook;
