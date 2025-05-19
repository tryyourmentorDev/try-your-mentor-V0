import React from 'react';

interface CancelButtonProps {
  onClick: () => void;
  text: string;
  fullWidth?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick, text, fullWidth }) => {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth ? "w-full":"w-3xs"} w-3xs bg-light hover:bg-muted px-5 py-2 border-2 border-base-light text-base-dark font-kanit font-medium text-lg rounded-2xl transition-all duration-600 transform active:scale-95`}
    >
      {text}
    </button>
  );
};

export default CancelButton;