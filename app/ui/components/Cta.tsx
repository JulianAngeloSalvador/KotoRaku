import React from "react";

interface CTA {
  className?: string;
  title: string;
}
export default function Cta({ className, title }: CTA) {
  return (
    <button
      className={`bg-secondary  outline-secondary text-primary font-bold ${className} transition-all duration-fast ease-in-out`}
    >
      {title}
    </button>
  );
}
