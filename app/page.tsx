"use client";
import UploadBox from "@/components/UploadBox";
import "react-image-crop/dist/ReactCrop.css";
import { ImageContextProvider } from "@/context/ImageContextProvider";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl">Text Extractor</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        <ImageContextProvider>
          <UploadBox />
        </ImageContextProvider>
        <ImageContextProvider>
          <UploadBox />
        </ImageContextProvider>
        <ImageContextProvider>
          <UploadBox />
        </ImageContextProvider>
      </div>
    </main>
  );
}

// const UploadBoxWrapper = () => {
//   const ImageContextInstance = useImageContext();
//   return <UploadBox />;
// };
