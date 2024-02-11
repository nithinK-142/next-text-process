/* eslint-disable @next/next/no-img-element */
"use client";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import Image from "next/image";

interface IUrl {
  url: string;
}
const UploadImage = () => {
  const [response, setResponse] = useState<IUrl | null>(null);
  const [message, setMessage] = useState("");
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res: unknown) => {
          // Do something with the response
          if (Array.isArray(res) && res.length > 0) {
            const { url } = res[0] as IUrl;
            setResponse({ url });
          }
          setMessage("Image Uploaded successfully.");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {message !== "" && (
        <>
          <p> {message} </p>
          {response?.url && <img src={response?.url} alt="img" />}
          {/* <Image src={response?.url} alt="img" height={80} width={80} /> */}
        </>
      )}
    </div>
  );
};

export default UploadImage;