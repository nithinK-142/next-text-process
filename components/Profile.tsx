/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const Profile = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc: string) => {
    setAvatarUrl(imgSrc);
  };

  const clearAvatarUrl = () => {
    setAvatarUrl("");
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <h2>Upload Image</h2>
      <div className="relative flex justify-center items-center mb-6 w-52 h-[20rem] rounded-lg shadow-lg">
        {!avatarUrl ? (
          <button onClick={() => setModalOpen(true)}>
            <Image src="/plus.png" alt="plus" width={60} height={60} />
          </button>
        ) : (
          <>
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-[90%] h-[60%] rounded-lg border-2 border-gray-400"
            />
            <button
              onClick={clearAvatarUrl}
              className="absolute text-4xl top-2 right-2"
            >
              <Image src="/circle.png" alt="plus" width={30} height={30} />
            </button>
          </>
        )}
      </div>
      <button className={`${avatarUrl ? "bg-blue-600/80" : "bg-stone-700"} px-6 py-[6px] text-xl rounded-lg text-white`}>
        Convert Image to Text
      </button>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
