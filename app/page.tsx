import { russo } from "./ui/fonts";
import Cta from "./ui/components/Cta";
import {
  primaryContent,
  secondaryContent,
  tertiaryContent,
} from "./content/landing/landingContent";
import clsx from "clsx";
import AnimatedText from "./ui/components/AnimatedText";
import { fromBottom, fromTransparent } from "./lib/motions";

export default function Home() {
  return (
    <>
      <section className="min-h-dvh flex flex-col justify-center items-center gap-y-10 pt-20">
        <AnimatedText
          text={primaryContent.caption!}
          element="p"
          className="text-center text-balance -translate-y-10 text-secondary/75 overflow-hidden"
          once
          duration={0.75}
          motionVariant={fromTransparent}
          delay={0.5}
        />

        <AnimatedText
          className={`font-russo text-special-headline leading-[1] overflow-hidden`}
          once
          element="h1"
          duration={0.75}
          text={primaryContent.headline!}
          motionVariant={fromBottom}
        />

        <div className="mt-24 relative w-fluid-120 min-h-10 isolate">
          <Cta
            title={primaryContent.ctaText!}
            className="rounded-md absolute w-full h-full inset-0 hover:-translate-x-1.5 hover:-translate-y-1.5 peer opacity-0 active:translate-x-0 active:translate-y-0 animate-on-sight"
            style={{ animationDelay: "1.35s" }}
          />
          <div
            className="rounded-md absolute inset scale-y-[1.1] scale-x-[1.05] w-full h-full outline outline-2 outline-secondary -z-10 peer-hover:scale-100 transition-transform duration-fast ease-in-out animate-on-sight opacity-0"
            style={{ animationDelay: "1.35s" }}
          />
        </div>
      </section>
      <section className="min-h-[50dvh] xl:min-h-dvh grid place-content-center">
        <article className="flex flex-col gap-4">
          <header className="flex flex-wrap gap-x-4">
            {secondaryContent.headline.split(" ").map((word) => (
              <AnimatedText
                className="leading-[1.15] text-special-subheadline overflow-hidden"
                element="h1"
                text={word}
                once
                motionVariant={fromBottom}
                duration={1}
              />
            ))}
          </header>
          <main>
            <AnimatedText
              element="p"
              className="text-caption font-light text-balance"
              text={secondaryContent.caption!}
              once
              motionVariant={fromTransparent}
              duration={0.75}
              delay={0.25}
            />
          </main>
        </article>
      </section>
      <section className="min-h-dvh grid items-center">
        <article className="flex flex-col gap-y-20 md:gap-y-10 py-24">
          {tertiaryContent.headline.split(" ").map((text, index) => (
            <AnimatedText
              element="h1"
              className={clsx("text-special-subheadline font-russo", {
                "self-end": index % 2,
              })}
              text={text}
              once
              motionVariant={fromBottom}
              duration={0.75}
            />
          ))}
        </article>
      </section>
    </>
  );
}
