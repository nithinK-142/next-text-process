import ImageCropper from "./ImageCropper";

interface ProfileProps {
  updateAvatar: (imgSrc: string) => void;
  closeModal: () => void;
}

const Modal: React.FC<ProfileProps> = ({ updateAvatar, closeModal }) => {
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
          <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all">
            <div className="px-5 py-4">
              <button
                type="button"
                className="absolute inline-flex items-center justify-center p-1 text-gray-400 rounded-md hover:bg-gray-700 focus:outline-none top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
