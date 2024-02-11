/* eslint-disable @next/next/no-img-element */
"use client";
import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";

const User = () => {
  const { userInfo } = useContext(ImageContext);
  return (
    <div className="bg-slate-200 border-2 border-black/30 px-2 py-[2px] rounded-md flex items-center justify-between w-24 md:w-28">
      <h2 className="text-lg">{userInfo.name}</h2>
      <div className="border rounded-full">
        <img
          src={userInfo.url}
          alt={userInfo.name}
          className="h-6 md:h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default User;
