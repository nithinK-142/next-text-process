/* eslint-disable @next/next/no-img-element */
"use client";
import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import ReactCrop, {
  PercentCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "@/utils/setCanvasPreview";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  updateAvatar,
  toggleCropModal,
} from "@/redux/slices/processImageSlice";

const MIN_DIMENSION = 150;

const ImageCropper = () => {
  const dispatch = useDispatch<AppDispatch>();

  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [crop, setCrop] = useState<PercentCrop | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInputRef.current?.click();
  };

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        const target = e.currentTarget;
        if (target instanceof HTMLImageElement) {
          if (error) setError("");
          const { naturalWidth, naturalHeight } = target;
          if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
            setError("Image must be at least 150 x 150 pixels.");
            return setImgSrc("");
          }
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { width, height } = e.currentTarget;
    const aspectRatio = width / height;

    const crop = makeAspectCrop(
      {
        unit: "%",
        x: 0,
        y: 0,
        width: 100,
      },
      aspectRatio,
      width,
      height
    );
    setCrop(crop);
  };

  return (
    <>
      {error && <p className="text-sm text-center text-red-400">{error}</p>}
      <div className="flex flex-col items-center">
        {imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_pixelCrop, percentCrop) => setCrop(percentCrop)}
            keepSelection
            minWidth={MIN_DIMENSION}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              alt="Upload"
              style={{ maxHeight: "70vh" }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            onClick={handleClick}
            className="px-4 py-2 font-mono text-lg text-white rounded-2xl bg-sky-500 hover:bg-sky-600"
          >
            <span>Choose image</span>
            <input
              type="file"
              ref={hiddenFileInputRef}
              accept="image/*"
              onChange={onSelectFile}
              className="hidden"
            />
          </button>
          <button
            className="px-4 py-2 font-mono text-lg text-white rounded-2xl bg-sky-500 hover:bg-sky-600"
            onClick={() => {
              setCanvasPreview(
                imgRef.current!,
                previewCanvasRef.current!,
                convertToPixelCrop(
                  crop!,
                  imgRef.current!.width,
                  imgRef.current!.height
                )
              );
              const dataUrl = previewCanvasRef.current!.toDataURL();
              dispatch(updateAvatar(dataUrl));
              dispatch(toggleCropModal());
            }}
            disabled={!imgSrc}
          >
            Crop Image
          </button>
        </div>
      </div>
      {crop && (
        <canvas
          ref={previewCanvasRef}
          style={{
            display: "none",
            border: "1px solid black",
            objectFit: "contain",
            width: 150,
            height: 150,
          }}
        />
      )}
    </>
  );
};
export default ImageCropper;
