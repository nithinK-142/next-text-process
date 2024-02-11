"use client";
import { createContext } from "react";

export interface IImageContext {
  userInfo: { name: string; url: string };
  avatarUrl: string;
  cropModal: boolean;
  textModal: boolean;
  extractedText: string;
  buttonText: string;
  updateAvatar: (imgUrl: string) => void;
  handleCropModalClick: () => void;
  handleTextModalClick: () => void;
  textModalClose: () => void;
  clearAvatarUrl: () => void;
  setExtractedText: (text: string) => void;
  setButtonText: (text: string) => void;
}

export const ImageContext = createContext<IImageContext>({
  userInfo: { name: "", url: "" },
  avatarUrl: "",
  cropModal: false,
  textModal: false,
  extractedText: "",
  buttonText: "",
  updateAvatar: (imgUrl: string) => {},
  handleCropModalClick: () => {},
  handleTextModalClick: () => {},
  textModalClose: () => {},
  clearAvatarUrl: () => {},
  setExtractedText: (text: string) => {},
  setButtonText: (text: string) => {},
});
