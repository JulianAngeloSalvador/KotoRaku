"use client";

import ReactLenis from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

export default function LenisContainer({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ReactLenis root options={{ lerp: 0.075, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
