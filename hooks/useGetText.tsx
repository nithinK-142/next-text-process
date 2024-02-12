import {
  toggleTextModal,
  setButtonText,
  setExtractedText,
} from "@/redux/slices/processImageSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const useGetText = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getText = async () => {
    dispatch(setButtonText("Extracting text..."));
    try {
      const response = await fetch("/api/text");
      if (response.ok) {
        const data = await response.text();
        dispatch(setExtractedText(data));
        dispatch(toggleTextModal());
      } else {
        console.error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setButtonText("Convert Image to Text"));
    }
  };

  return { getText };
};

export default useGetText;
