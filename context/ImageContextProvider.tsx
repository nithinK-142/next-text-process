"use client";
import { FC, ReactNode, useState } from "react";
import { ImageContext, IImageContext } from "./ImageContext";

export const ImageContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo] = useState({
    name: "Smriti",
    url: "/user.png",
  });
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [cropModal, setCropModal] = useState<boolean>(false);
  const [textModal, setTextModal] = useState<boolean>(false);
  const [extractedText, setExtractedText] = useState<string>("");
  const [buttonText, setButtonText] = useState("Convert Image to Text");

  const updateAvatar = (imgSrc: string) => {
    setAvatarUrl(imgSrc);
  };

  const clearAvatarUrl = () => setAvatarUrl("");

  const handleCropModalClick = () => setCropModal((prev) => (prev = !prev));

  const handleTextModalClick = () => setTextModal((prev) => (prev = !prev));

  const textModalClose = () => {
    handleTextModalClick();
    clearAvatarUrl();
  };

  const ImageContextValue: IImageContext = {
    userInfo,
    avatarUrl,
    cropModal,
    textModal,
    extractedText,
    buttonText,
    updateAvatar,
    handleCropModalClick,
    handleTextModalClick,
    textModalClose,
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
