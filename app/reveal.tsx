"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

export default function Reveal({
  as = "div",
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const supportsIntersectionObserver =
    typeof IntersectionObserver !== "undefined";
  const [fallbackVisible, setFallbackVisible] = useState(false);
  const shouldShow = prefersReducedMotion || fallbackVisible;
  const initial = shouldShow
    ? false
    : { opacity: 0, y: as === "section" ? 100 : 60 };

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setFallbackVisible(true);
    }
  }, [prefersReducedMotion]);

  const props = {
    "aria-labelledby": ariaLabelledBy,
    animate: fallbackVisible ? { opacity: 1, y: 0 } : undefined,
    className,
    "data-motion-reveal": "",
    "data-motion-revealed": fallbackVisible ? "true" : undefined,
    id,
    initial,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    viewport: supportsIntersectionObserver
      ? {
          once: true,
          amount: "some" as const,
        }
      : undefined,
    whileInView:
      prefersReducedMotion || !supportsIntersectionObserver
        ? undefined
        : { opacity: 1, y: 0 },
  };

  if (as === "section") {
    return <motion.section {...props}>{children}</motion.section>;
  }

  if (as === "article") {
    return <motion.article {...props}>{children}</motion.article>;
  }

  return <motion.div {...props}>{children}</motion.div>;
}
