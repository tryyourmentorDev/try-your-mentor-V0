import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Filled icon
import { CheckCircleIcon as OutlineCheckCircleIcon } from "@heroicons/react/24/solid"; // Outline icon

interface Option {
  id: number;
  text: string;
}

interface SelectButtonGroupProps {
  options: Option[];
  onSelect: (id: number) => void;
}

const options = [
  { id: 1, text: "I need to get promoted" },
  { id: 2, text: "I need to change my career" },
];

const SelectButtonGroup: React.FC<SelectButtonGroupProps> = ({options, onSelect}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const onSelectOption = (id: number) => {
    setSelected(id);
    onSelect(id);
  }

  return (
    <div className="mt-4 mb-4">
    <div className="grid grid-cols-2 gap-x-6">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelectOption(option.id)}
          className={`relative flex items-center justify-center w-full h-30 p-4 font-kanit font-light text-base border-2 rounded-2xl transition-all
            ${
              selected === option.id
                ? "border-primary bg-primary-light"
                : "border-muted bg-light"
            }`}
        >
          {/* Text */}
          <span className={`${selected === option.id
            ? "text-primary font-medium"
            : "text-base-dark"
          }`}>{option.text}</span>

          {/* Icon in top-right corner */}
          <span className="absolute top-3 right-3">
            {selected === option.id ? (
              <CheckCircleIcon className="w-6 h-6 text-primary" />
            ) : (
              <OutlineCheckCircleIcon className="w-6 h-6 text-muted" />
            )}
          </span>
        </button>
      ))}
    </div>
    </div>
  );
};

export default SelectButtonGroup;
