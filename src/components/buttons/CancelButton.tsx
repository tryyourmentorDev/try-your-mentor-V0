import React from 'react';

interface CancelButtonProps {
  onClick: () => void;
  text: string;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-3xs bg-light hover:bg-muted p-4 border-2 border-base-light text-base-dark font-kanit font-medium text-lg rounded-2xl transition-all duration-600 transform active:scale-95"
    >
      {text}
    </button>
  );
};

export default CancelButton;