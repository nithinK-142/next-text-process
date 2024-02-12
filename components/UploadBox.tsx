/* eslint-disable @next/next/no-img-element */
"use client";
import CropModal from "./CropModal";
import TextModal from "./TextModal";
import Image from "next/image";
import useGetText from "@/hooks/useGetText";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  toggleCropModal,
  clearAvatarUrl,
} from "@/redux/slices/processImageSlice";
import { useDispatch } from "react-redux";

const UploadBox = () => {
  const { avatarUrl, buttonText, cropModal, textModal } = useAppSelector(
    (state) => state.processImageReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const { getText } = useGetText();
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="bg-white relative flex justify-center items-center mb-6 w-52 h-[20rem] shadow-3xl border border-black/10 rounded-lg">
        {!avatarUrl ? (
          <button
            onClick={() => dispatch(toggleCropModal())}
            aria-label="Add Image"
          >
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
              onClick={() => dispatch(clearAvatarUrl())}
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
