"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { MOTION_EASE } from "@/lib/motion";

const panelTransition = { duration: 0.38, ease: MOTION_EASE };
const itemTransition = { duration: 0.32, ease: MOTION_EASE };

const listVariants = {
  open: {
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            className="nav-backdrop"
            aria-label="Menü schließen"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: MOTION_EASE }}
            onClick={onClose}
          />
          <motion.nav
            id="nav-mobile"
            className="nav-mobile"
            aria-label="Mobile Navigation"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduce
                ? undefined
                : { opacity: 0, y: -10, transition: { duration: 0.28, ease: MOTION_EASE } }
            }
            transition={panelTransition}
          >
            <div className="nav-mobile__inner">
              <motion.ul
                initial={reduce ? false : "closed"}
                animate="open"
                exit={reduce ? undefined : "closed"}
                variants={listVariants}
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={itemVariants} transition={itemTransition}>
                    <Link href={link.href} onClick={onClose}>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className="nav-mobile__cta"
                  variants={itemVariants}
                  transition={itemTransition}
                >
                  <Link href="#kontakt" className="btn btn-primary" onClick={onClose}>
                    Beratung anfragen <span className="arrow">→</span>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
