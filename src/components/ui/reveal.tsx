"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useMotionPreset } from "@/hooks/use-motion-preset";
import {
  MOTION_EASE,
  getRevealOffset,
  type RevealDirection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  /** Sofort beim Laden statt beim Scrollen */
  immediate?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate">;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();
  const offset = getRevealOffset(direction, preset);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const hidden = { opacity: 0, ...offset };
  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(immediate
        ? { animate: visible }
        : {
            whileInView: visible,
            viewport: { once: true, margin: preset.viewportMargin },
          })}
      transition={{
        duration: preset.duration,
        ease: MOTION_EASE,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  immediate?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "variants">;

export function RevealStagger({
  children,
  className,
  stagger,
  delayChildren,
  immediate = false,
  ...rest
}: RevealStaggerProps) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ?? preset.stagger,
        delayChildren: delayChildren ?? preset.delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : {
            whileInView: "show",
            viewport: { once: true, margin: preset.viewportMargin },
          })}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

export function RevealItem({
  children,
  className,
  direction = "up",
  ...rest
}: RevealItemProps) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();
  const offset = getRevealOffset(direction, preset);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: preset.duration, ease: MOTION_EASE },
    },
  };

  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

type HeroRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Hero-Einblendung beim Seitenload (gestaffelt über HeroRevealStagger) */
export function HeroReveal({ children, className, delay = 0 }: HeroRevealProps) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: preset.distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: preset.duration,
        ease: MOTION_EASE,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroRevealStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: preset.heroStagger,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroRevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const preset = useMotionPreset();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: preset.distance },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: preset.duration, ease: MOTION_EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
