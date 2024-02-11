/* eslint-disable @next/next/no-img-element */
import Header from "./Header";

interface ProfileProps {
  imgSrc: string;
  text: string;
  closeModal: () => void;
  clearUrl: () => void;
}

const TextModal: React.FC<ProfileProps> = ({
  imgSrc,
  text,
  closeModal,
  clearUrl,
}) => {
  const handleClick = () => {
    closeModal();
    clearUrl();
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-all bg-gray-800 bg-opacity-75 backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="relative flex justify-center min-h-full px-2 py-12">
          <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-white/80 shadow-xl transition-all flex flex-col items-center">
            <div className="absolute px-5 py-4 -top-10 -right-10">
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 text-gray-400 rounded-md bg-gray-700 focus:outline-none top-2 right-2"
                onClick={handleClick}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-8 w-8"
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
            </div>
            <div className="w-full">
              <Header />
            </div>
            <div className="relative flex justify-center items-center mb-6 w-52 h-[20rem] shadow-lg rounded-lg">
              <img
                src={imgSrc}
                alt="Avatar"
                className="w-[90%] h-[60%] rounded-lg border-2 border-gray-400"
              />
            </div>
            <div className="w-3/4">
              <p className="text-center text-black">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextModal;
