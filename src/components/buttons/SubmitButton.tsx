import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-3xs p-2 bg-linear-90 from-primary to-secondary hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-600 transform active:scale-95  text-light font-kanit font-medium text-lg rounded-2xl"
      // className="w-3xs p-4 bg-primary hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-600 transform active:scale-95  text-light font-kanit font-medium text-lg rounded-2xl"
      // className="bg-blue-500 hover:bg-green-500 transition-colors duration-600 p-4 text-white text-center rounded-lg"
    >
      {text}
    </button>
  );
};

export default SubmitButton;