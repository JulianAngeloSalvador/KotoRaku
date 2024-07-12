import { russo } from "./ui/fonts";
import Cta from "./ui/components/Cta";
import {
  primaryContent,
  secondaryContent,
  tertiaryContent,
} from "./content/landing/landingContent";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <section className="min-h-dvh flex flex-col justify-center items-center gap-y-10 pt-20">
        <p className="text-center text-balance -translate-y-10 text-secondary/75">
          {primaryContent.caption}
        </p>
        <h1 className={`font-russo text-special-headline leading-[.75]`}>
          {primaryContent.headline}
        </h1>

        <div className="mt-24 relative w-fluid-120 min-h-10 isolate">
          <Cta
            title={primaryContent.ctaText!}
            className="rounded-md absolute w-full h-full inset-0 hover:-translate-x-1.5 hover:-translate-y-1.5 peer active:translate-x-0 active:translate-y-0"
          />
          <div className="rounded-md absolute inset scale-y-[1.1] scale-x-[1.05] w-full h-full outline outline-2 outline-secondary -z-10 peer-hover:scale-100 transition-transform duration-fast ease-in-out" />
        </div>
      </section>
      <section className="min-h-[50dvh] xl:min-h-dvh grid place-content-center">
        <article className="flex flex-col gap-4">
          <header>
            <h1 className="leading-[1.1] text-special-subheadline">
              {secondaryContent.headline}
            </h1>
          </header>
          <main>
            <p className="text-caption font-light text-balance">
              {secondaryContent.caption}
            </p>
          </main>
        </article>
      </section>
      <section className="min-h-dvh grid items-center">
        <article className="flex flex-col gap-y-20 md:gap-y-10 py-24">
          {tertiaryContent.headline.split(" ").map((text, index) => (
            <h1
              key={text}
              className={clsx("text-special-subheadline font-russo", {
                "self-end": index % 2,
              })}
            >
              {text}
            </h1>
          ))}
        </article>
      </section>
    </>
  );
}
