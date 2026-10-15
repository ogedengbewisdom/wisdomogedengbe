"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type StaggeredListProps = {
  as?: "div" | "ul";
  children: ReactNode;
  className?: string;
  itemClassName?: string;
};

export default function StaggeredList({
  as = "div",
  children,
  className,
  itemClassName,
}: StaggeredListProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const supportsIntersectionObserver =
    typeof IntersectionObserver !== "undefined";
  const [fallbackVisible, setFallbackVisible] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setFallbackVisible(true);
    }
  }, [prefersReducedMotion]);

  function itemTransition(index: number) {
    return prefersReducedMotion
      ? { duration: 0 }
      : {
          duration: 0.8,
          ...(index > 0 && { delay: index * 0.08 }),
          ease: [0.22, 1, 0.36, 1] as const,
        };
  }

  const itemInitial = prefersReducedMotion
    ? false
    : { opacity: 0, y: 60 };
  const itemAnimate = fallbackVisible ? { opacity: 1, y: 0 } : undefined;
  const itemWhileInView =
    prefersReducedMotion || !supportsIntersectionObserver
      ? undefined
      : { opacity: 1, y: 0 };
  const itemViewport = supportsIntersectionObserver
    ? {
        once: true,
        amount: "some" as const,
      }
    : undefined;

  if (as === "ul") {
    return (
      <motion.ul className={className} initial={false}>
        {items.map((item, index) => (
          <motion.li
            className={itemClassName}
            data-motion-reveal=""
            data-motion-revealed={fallbackVisible ? "true" : undefined}
            animate={itemAnimate}
            initial={itemInitial}
            key={index}
            transition={itemTransition(index)}
            viewport={itemViewport}
            whileInView={itemWhileInView}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  return (
    <motion.div className={className} initial={false}>
      {items.map((item, index) => (
        <motion.div
          className={itemClassName}
          data-motion-reveal=""
          data-motion-revealed={fallbackVisible ? "true" : undefined}
          animate={itemAnimate}
          initial={itemInitial}
          key={index}
          transition={itemTransition(index)}
          viewport={itemViewport}
          whileInView={itemWhileInView}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
