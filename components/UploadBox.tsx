/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import TextModal from "./TextModal";

const UploadBox = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [textModalOpen, setTextModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Convert Image to Text");

  const updateAvatar = (imgSrc: string) => {
    setAvatarUrl(imgSrc);
  };

  const clearAvatarUrl = () => {
    setAvatarUrl("");
  };

  const getText = async () => {
    setButtonText("Extracting..");
    try {
      const response = await fetch("/api/text");
      if (response.ok) {
        const data = await response.text();
        setText(data);
        setTextModalOpen(true);
      } else console.error("Failed to fetch data from the API");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setButtonText("Convert Image to Text");
    }
  };
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative flex justify-center items-center mb-6 w-52 h-[20rem] shadow-lg rounded-lg">
        {!avatarUrl ? (
          <button onClick={() => setModalOpen(true)} aria-label="Add Image">
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
              aria-label="Remove Image"
            >
              <Image src="/circle.png" alt="plus" width={30} height={30} />
            </button>
          </>
        )}
      </div>
      <button
        className={`${
          avatarUrl ? "bg-blue-600/80" : "bg-stone-700 cursor-not-allowed"
        } px-6 py-[6px] text-xl rounded-lg text-white`}
        onClick={getText}
        disabled={!avatarUrl}
      >
        {buttonText}
      </button>

      {textModalOpen && (
        <TextModal
          imgSrc={avatarUrl}
          text={text}
          closeModal={() => setTextModalOpen(false)}
          clearUrl={() => setAvatarUrl("")}
        />
      )}
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UploadBox;
