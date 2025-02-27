import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary";
}

export default function Tag({
  children,
  className = "",
  color = "primary",
}: TagProps) {
  const colorClasses = {
    primary: "bg-blue-100 dark:bg-emerald-900",
  };

  return (
    <span
      className={`
        flex items-center gap-1 px-2 py-1 rounded-md text-sm
        ${colorClasses[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}