import { ImageContext } from "@/context/ImageContext";
import useGetText from "@/hooks/useGetText";
import React, { useContext } from "react";

const ConvertButton = () => {
  const { getText } = useGetText();
  const { avatarUrl, buttonText } = useContext(ImageContext);
  return (
    <button
      className={`${
        avatarUrl ? "bg-blue-600/80" : "bg-stone-700 cursor-not-allowed"
      } px-6 py-[6px] text-xl rounded-lg text-white`}
      onClick={getText}
      disabled={!avatarUrl}
    >
      {buttonText}
    </button>
  );
};

export default ConvertButton;
