import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: (prop: unknown) => unknown;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`max-w-xs px-6 py-2 text-black bg-purple-500 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 ${className}`}
    >
      {children}
    </button>
  );
};
