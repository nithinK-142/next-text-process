import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";
import ImageCropper from "./ImageCropper";
import CloseButton from "./CloseButton";

const CropModal = () => {
  const { handleCropModalClick } = useContext(ImageContext);
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-all bg-gray-900 bg-opacity-75 backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex justify-center min-h-full px-2 py-12 text-center ">
          <div className="w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all">
            <div className="relative px-5 py-4">
              <div className="absolute px-5 py-4 -top-10 -right-10">
                <CloseButton handleClick={handleCropModalClick} />
              </div>
              <ImageCropper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CropModal;
