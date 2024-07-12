import { footerContent } from "@/app/content/footer/footerContent";
import { globalContent } from "@/app/content/globals";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid place-content-center min-h-[10dvh]">
      <ul className="flex flex-col text-center items-center md:flex-row md:text-left gap-x-12 children:text-secondary/75 children:text-small p-4">
        {footerContent.map((content) =>
          !content.path ? (
            <li key={content.title}>{content.title}</li>
          ) : (
            <li key={content.title}>
              <Link
                href={content.path}
                className={clsx(
                  "hover:text-secondary transition-colors duration-fast ease-in-out",
                  {
                    "font-russo text-caption":
                      content.title === globalContent.sitename,
                  }
                )}
              >
                {content.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </footer>
  );
}
