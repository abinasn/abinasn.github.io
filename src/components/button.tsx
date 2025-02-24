import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  variant?: "default" | "primary" | "success" | "danger";
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function Button({ children, onClick, className, variant = "default", size = "medium" }: ButtonProps) {
  const baseStyles = "flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 w-fit cursor-pointer";
  
  const variants = {
    default: "bg-gray-300 text-black hover:bg-gray-400",
    success: "bg-green-600 text-white hover:bg-green-700",
    primary: "bg-slate-500 text-white hover:bg-slate-700 dark:bg-stone-600 dark:hover:bg-stone-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    small: "px-2 py-1",
    medium: "px-3 py-1.5",
    large: "px-4 py-2"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
