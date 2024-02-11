"use client";
import { FC, ReactNode, useState } from "react";
import { ImageContext, IImageContext } from "./ImageContext";

export const ImageContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [cropModal, setCropModal] = useState(false);
  const [textModal, setTextModal] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [buttonText, setButtonText] = useState("Convert Image to Text");

  const updateAvatar = (imgSrc: string) => {
    setAvatarUrl(imgSrc);
  };

  const clearAvatarUrl = () => setAvatarUrl("");

  const handleCropModalClick = () => setCropModal((prev) => (prev = !prev));

  const handleTextModalClick = () => setTextModal((prev) => (prev = !prev));

  const ImageContextValue: IImageContext = {
    avatarUrl,
    cropModal,
    textModal,
    extractedText,
    buttonText,
    updateAvatar,
    handleCropModalClick,
    handleTextModalClick,
    clearAvatarUrl,
    setExtractedText,
    setButtonText,
  };

  return (
    <ImageContext.Provider value={ImageContextValue}>
      {children}
    </ImageContext.Provider>
  );
};
