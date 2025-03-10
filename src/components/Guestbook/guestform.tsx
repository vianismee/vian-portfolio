"use client";

import React, { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export const GuestForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const refreshPage = () => {
    window.location.reload();
  };

  const router = useRouter();

  const handlePost = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/guest/", {
        name: inputName,
        username: inputUsername,
        desc: inputDesc,
      });

      setInputName("");
      setInputUsername("");
      setInputDesc("");
      router.refresh();
      refreshPage();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="w-full flex flex-row">
      <div className="flex-1/2 flex">Guest Form</div>
      <div className="flex flex-row flex-1/2">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-3 w-full justify-between">
              <p>Your Name</p>
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Hello World"
                className="p-4 rounded-lg bg-secondary/30 border-1 border-foreground/20"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Your Username</p>
              <input
                type="text"
                name="Username"
                id=""
                placeholder="Hello World"
                className="p-4 rounded-lg bg-secondary/30 border-1 border-foreground/20"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <textarea
              name="Description"
              id=""
              placeholder="Hello World"
              className="p-4 w-full rounded-lg bg-secondary/30 border-1 border-foreground/20"
              value={inputDesc}
              onChange={(e) => setInputDesc(e.target.value)}
            ></textarea>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer"
            onClick={handlePost}
          >
            {" "}
            Post{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
