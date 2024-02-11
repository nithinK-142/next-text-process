import UploadBox from "@/components/UploadBox";
import "react-image-crop/dist/ReactCrop.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl">Text Extractor</h1>
      <UploadBox />
    </main>
  );
}
