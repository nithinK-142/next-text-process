import Profile from "@/components/Profile";
import "react-image-crop/dist/ReactCrop.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl">Text Extractor</h1>
      <Profile />
    </main>
  );
}
