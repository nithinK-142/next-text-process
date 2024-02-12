/* eslint-disable @next/next/no-img-element */
"use client";
import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";
import CropModal from "./CropModal";
import TextModal from "./TextModal";
import Image from "next/image";
import ConvertButton from "./ConvertButton";

const UploadBox = () => {
  const {
    avatarUrl,
    handleCropModalClick,
    clearAvatarUrl,
    cropModal,
    textModal,
  } = useContext(ImageContext);

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

      {/* <ConvertButton /> */}

      {textModal && <TextModal />}
      {cropModal && <CropModal />}
    </div>
  );
};

export default UploadBox;
