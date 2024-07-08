import React from "react";

interface Headline {
  headline: string;
  subheadline?: string;
  caption?: boolean;
  captionContent?: React.ReactNode;
}
export default function Headline({
  headline,
  subheadline,
  caption,
  captionContent,
}: Headline) {
  return (
    <article>
      <header>
        <h1>{headline}</h1>
        {subheadline && <h2>{subheadline}</h2>}
      </header>
      {headline && <h1>{caption}</h1>}
      {caption && <main>{captionContent}</main>}
    </article>
  );
}
