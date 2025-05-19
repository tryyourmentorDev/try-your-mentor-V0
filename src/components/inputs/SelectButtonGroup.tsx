import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Filled icon
import { CheckCircleIcon as OutlineCheckCircleIcon } from "@heroicons/react/24/solid"; // Outline icon

interface Option {
  id: number;
  text: string;
  value?: string;
  description?: string;
}

interface SelectButtonGroupProps {
  label: string;
  options: Option[];
  isRequired: boolean;
  onSelect: (option: Option) => void;
}

const SelectButtonGroup: React.FC<SelectButtonGroupProps> = ({options, label, isRequired, onSelect}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const onSelectOption = (selected: Option) => {
    setSelected(selected.id);
    onSelect(selected);
  }

  return (
    <div className="mt-4 mb-4">
      {/* Label */}
      <label className="mb-2 text-base font-medium font-kanit">
        {label}{" "}
        {isRequired ? (
          <span className="text-base-light font-light">{" *"}</span>
        ) : (
          <span className="text-base-light font-light">
            <i>{"  (Optional)"}</i>
          </span>
        )}
      </label>

      {/* Button Group */}
    <div className="grid grid-cols-2 gap-x-6">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelectOption(option)}
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
