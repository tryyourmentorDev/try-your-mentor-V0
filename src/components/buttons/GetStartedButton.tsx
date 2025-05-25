import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  text: string;
  fullWidth?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, text, fullWidth=false }) => {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth ? "w-full":"w-3xs"} px-5 py-3 bg-linear-90 from-secondary to-primary  hover:bg-linear-0 transition-all duration-600 transform active:scale-95 text-light font-kanit font-medium text-lg rounded-4xl cursor-pointer`}
      // className="w-3xs p-4 bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-600 transform active:scale-95  text-light font-kanit font-medium text-lg rounded-2xl"
      // className="bg-blue-500 hover:bg-green-500 transition-colors duration-600 p-4 text-white text-center rounded-lg"
    >
      {text}
    </button>
  );
};

export default SubmitButton;