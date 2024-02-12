import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProcessImage {
  userInfo: { name: string; url: string };
  avatarUrl: string;
  cropModal: boolean;
  textModal: boolean;
  extractedText: string;
  buttonText: string;
}

const initialState: IProcessImage = {
  userInfo: { name: "Smriti", url: "/user.png" },
  avatarUrl: "",
  cropModal: false,
  textModal: false,
  extractedText: "",
  buttonText: "Convert Image to Text",
};

const processImageSlice = createSlice({
  name: "processImage",
  initialState,
  reducers: {
    updateAvatar(state, action: PayloadAction<string>) {
      state.avatarUrl = action.payload;
    },
    clearAvatarUrl(state) {
      state.avatarUrl = "";
    },
    toggleCropModal(state) {
      state.cropModal = !state.cropModal;
    },
    toggleTextModal(state) {
      state.textModal = !state.textModal;
    },
    clearUpload(state) {
      state.textModal = !state.textModal;
      state.avatarUrl = "";
    },
    setExtractedText(state, action: PayloadAction<string>) {
      state.extractedText = action.payload;
    },
    setButtonText(state, action: PayloadAction<string>) {
      state.buttonText = action.payload;
    },
  },
});

export const {
  updateAvatar,
  clearAvatarUrl,
  toggleCropModal,
  toggleTextModal,
  clearUpload,
  setExtractedText,
  setButtonText,
} = processImageSlice.actions;

export default processImageSlice.reducer;
