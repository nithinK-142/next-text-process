/* eslint-disable @next/next/no-img-element */
"use client"
import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";
import CropModal from "./CropModal";
import TextModal from "./TextModal";
import Image from "next/image";

const UploadBox = () => {
  const {
    avatarUrl,
    handleCropModalClick,
    handleTextModalClick,
    clearAvatarUrl,
    buttonText,
    cropModal,
    textModal,
    setButtonText,
    setExtractedText,
  } = useContext(ImageContext);

  const getText = async () => {
    setButtonText("Extracting text...");
    try {
      const response = await fetch("/api/text");
      if (response.ok) {
        const data = await response.text();
        setExtractedText(data);
        handleTextModalClick();
      } else console.error("Failed to fetch data from the API");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setButtonText("Convert Image to Text");
    }
  };
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="bg-white relative flex justify-center items-center mb-6 w-52 h-[20rem] shadow-3xl border border-black/10 rounded-lg">
        {!avatarUrl ? (
          <button onClick={handleCropModalClick} aria-label="Add Image">
            <Image src="/plus.png" alt="plus" width={60} height={60} />
          </button>
        ) : (
          <>
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-[90%] h-[60%] rounded-lg"
            />
            <button
              onClick={clearAvatarUrl}
              className="absolute text-4xl top-2 right-2"
              aria-label="Remove Image"
            >
              <Image src="/circle.png" alt="circle" width={30} height={30} />
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

      {textModal && <TextModal />}
      {cropModal && <CropModal />}
    </div>
  );
};

export default UploadBox;
