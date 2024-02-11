interface ICloseButton {
  handleClick: () => void;
}
const CloseButton: React.FC<ICloseButton> = ({ handleClick }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-1 text-gray-400 rounded-md bg-gray-700 focus:outline-none top-2 right-2"
      onClick={handleClick}
      title="Close"
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
  );
};

export default CloseButton;
