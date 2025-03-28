import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder = "",
  isRequired = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full mt-2 mb-4">
      <label htmlFor={name} className="mb-1 text-base font-medium font-kanit">
        {label}{isRequired ? (<span className="text-base-light font-light">{" *"}</span>): (<span className="text-base-light font-light"><i>{"  (Optional)"}</i></span>)}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-2 font-kanit font-normal text-base-dark border border-2 focus:border-2 rounded-2xl outline-none transition-all duration-400
          ${
            error
              ? "border-error focus:border-error"
              : isFocused
              ? "border-primary focus:border-primary"
              : "border-muted"
          }`}
      />
      {error && <p className="ms-2 mt-1 text-error text-sm font-kanit">{error}</p>}
    </div>
  );
};

export default InputField;
