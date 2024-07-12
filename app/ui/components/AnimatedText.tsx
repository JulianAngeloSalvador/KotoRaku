"use client";
import clsx from "clsx";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef, useState } from "react";
const staggerValue = 0.3;
export default function AnimatedText({
  text,
  element: Wrapper = "p",
  className,
  once,
  duration = 0.5,
  splitText = false,
  motionVariant,
  delay,
  hoverable = false,
}: AnimatedTextProps) {
  const animatedText = useRef(null);
  const inView = useInView(animatedText, { amount: 0.5, once: once });

  const [hovered, setHovered] = useState(false);
  return (
    <>
      <span className="sr-only">{text}</span>
      <Wrapper
        ref={animatedText}
        className={`${className} flex gap-x-1 relative `}
        onMouseEnter={() => hoverable && setHovered(true)}
        onMouseLeave={() => hoverable && setHovered(false)}
      >
        {!splitText ? (
          <motion.span
            className={clsx(
              { "inline-block": !hoverable },
              { "whitespace-nowrap": hoverable }
            )}
            variants={motionVariant}
            initial="hidden"
            animate={!inView ? "hidden" : "visible"}
            transition={{
              ease: "easeInOut",
              duration: duration,
              delay: delay,
            }}
            style={{ translateY: 0 }}
          >
            {!hoverable ? (
              text
            ) : (
              <>
                <span>
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      animate={
                        hovered ? { translateY: "-100%" } : { translateY: 0 }
                      }
                      transition={{ delay: 0.025 * index }}
                      className="inline-block"
                      style={{ translateY: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="absolute inset-0">
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ translateY: "100%" }}
                      animate={
                        hovered ? { translateY: 0 } : { translateY: "100%" }
                      }
                      transition={{ delay: 0.025 * index }}
                      className="inline-block bg-primary"
                      style={{ translateY: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </>
            )}
          </motion.span>
        ) : (
          text.split(" ").map((word, index) => (
            <motion.span
              className="inline-block"
              key={`${word}-${index}`}
              variants={motionVariant}
              initial="hidden"
              animate={!inView ? "hidden" : "visible"}
              transition={{
                ease: "easeInOut",
                duration: duration,
                delay: staggerValue * index,
              }}
              style={{ translateY: 0 }}
            >
              {word}
            </motion.span>
          ))
        )}
      </Wrapper>
    </>
  );
}

type TextWrappers = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

interface AnimatedTextProps {
  text: string;
  element: TextWrappers;
  className?: string;
  once: boolean;
  duration?: number;
  delay?: number;
  splitText?: boolean;
  motionVariant: Variants;
  hoverable?: boolean;
}
