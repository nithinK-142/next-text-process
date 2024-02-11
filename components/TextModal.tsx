/* eslint-disable @next/next/no-img-element */
import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";

import { removeFirstAndLastTwo } from "@/utils/textFormat";
import Header from "./Header";
import CloseButton from "./CloseButton";

const TextModal = () => {
  const { avatarUrl, extractedText, textModalClose } =
    useContext(ImageContext);
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-all bg-gray-800 bg-opacity-75 backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="relative flex justify-center min-h-full px-2 py-12">
          <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-white/80 shadow-xl transition-all flex flex-col items-center">
            <div className="absolute px-5 py-4 -top-10 -right-10">
              <CloseButton handleClick={textModalClose} />
            </div>
            <div className="w-full">
              <Header />
            </div>
            <div className="relative flex justify-center items-center mb-6 w-52 h-64 shadow-lg rounded-lg border-black/10">
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </div>
            <div className="w-3/4 mb-4">
              <p className="text-center text-black">
                {removeFirstAndLastTwo(extractedText)}
              </p>
            </div>

            <button
              className="bg-blue-600/80 px-4 py-[6px] text-lg rounded-lg text-white"
              onClick={textModalClose}
            >
              Upload Again!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextModal;
