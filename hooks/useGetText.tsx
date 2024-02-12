// useGetText.tsx
import { useContext } from "react";
import { ImageContext } from "@/context/ImageContext";

const useGetText = () => {
  const {
    setButtonText,
    setExtractedText,
    handleTextModalClick,
  } = useContext(ImageContext);

  const getText = async () => {
    setButtonText("Extracting text...");
    try {
      const response = await fetch("/api/text");
      if (response.ok) {
        const data = await response.text();
        setExtractedText(data);
        handleTextModalClick();
      } else console.error("Failed to fetch data from the API");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setButtonText("Convert Image to Text");
    }
  };

  return { getText };
};

export default useGetText;
