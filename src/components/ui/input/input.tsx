import React from "react";
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ placeholder, value, onChange, className }: IInput) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`max-w-xs px-1 py-1 text-start text-inputText placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-purple-400 ${className}`}
    />
  );
};
