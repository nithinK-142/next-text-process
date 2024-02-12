"use client";
import ConvertButton from "@/components/ConvertButton";
import UploadBox from "@/components/UploadBox";
import { ButtonContextProvider } from "@/context/ButtonContextProvider";
import { ImageContextProvider } from "@/context/ImageContextProvider";
import "react-image-crop/dist/ReactCrop.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl">Text Extractor</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        <ButtonContextProvider>
          <ImageContextProvider>
            <UploadBox />
          </ImageContextProvider>
          <ImageContextProvider>
            <UploadBox />
          </ImageContextProvider>
          <ImageContextProvider>
            <UploadBox />
          </ImageContextProvider>
        </ButtonContextProvider>
      </div>
      <ConvertButton />
    </main>
  );
}
