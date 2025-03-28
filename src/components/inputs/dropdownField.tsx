import React, { useState } from "react";

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  isRequired?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
  isRequired = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full mt-2 mb-4 relative">
      {/* Label */}
      <label htmlFor={name} className="mb-1 text-base font-medium font-kanit">
        {label}{" "}
        {isRequired ? (
          <span className="text-base-light font-light">{" *"}</span>
        ) : (
          <span className="text-base-light font-light">
            <i>{"  (Optional)"}</i>
          </span>
        )}
      </label>

      {/* Select Dropdown */}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-2 font-kanit font-light text-base text-base-dark border-2 focus:border-2 rounded-2xl outline-none transition-all duration-1000 appearance-none
            ${
              error
                ? "border-error focus:border-error"
                : isFocused
                ? "border-primary focus:border-primary"
                : "border-muted"
            }`}
        >
          {options.map((option) => (
            <option className="bg-white text-base-dark p-2 hover:bg-primary hover:text-white" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="ms-2 mt-1 text-error text-sm font-kanit">{error}</p>}
    </div>
  );
};

export default Dropdown;
