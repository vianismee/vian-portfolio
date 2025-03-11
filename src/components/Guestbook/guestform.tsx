"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BookHeart } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";

const guestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .regex(/^[^@]+$/, "Username should not contain '@'"),
  desc: z.string().min(5, "Comment must be at least 5 characters"),
});

export const GuestForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(guestSchema),
  });

  const onSubmit = async (data: {
    name: string;
    username: string;
    desc: string;
  }) => {
    try {
      await axios.post("/api/guest/", data);
      reset();
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            effect="expandIcon"
            icon={BookHeart}
            iconPlacement="right"
            variant="default"
            className="cursor-pointer"
          >
            Add Guestbook
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-[15pt]">
            <span className="inline-flex justify-center items-center gap-3">
              <BookHeart /> Vianismee Guestbook
            </span>
          </DialogTitle>
          <DialogDescription>
            Add your Guestbook to review my portfolio or say Hi to me
          </DialogDescription>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="font-medium">
                Name
              </Label>
              <Input
                type="text"
                placeholder="Type your name ..."
                className="placeholder:italic"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="font-medium">
                Username
              </Label>
              <Input
                type="text"
                placeholder="Type your Username (without '@') ..."
                className="placeholder:italic"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="desc" className="font-medium">
                Comment
              </Label>
              <Textarea
                placeholder="Type your comment ..."
                className="placeholder:italic h-28"
                {...register("desc")}
              />
              {errors.desc && (
                <p className="text-red-500 text-sm">{errors.desc.message}</p>
              )}
            </div>
            <div className="flex flex-row gap-4">
              <DialogClose>
                <Button variant="secondary" className="cursor-pointer">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Send
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
