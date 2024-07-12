import React, { CSSProperties } from "react";

interface CTA {
  className?: string;
  title: string;
  style?: CSSProperties;
}
export default function Cta({ className, title, style }: CTA) {
  return (
    <button
      className={`bg-secondary  outline-secondary text-primary font-bold ${className} transition-all duration-fast ease-in-out`}
      style={style}
    >
      {title}
    </button>
  );
}
