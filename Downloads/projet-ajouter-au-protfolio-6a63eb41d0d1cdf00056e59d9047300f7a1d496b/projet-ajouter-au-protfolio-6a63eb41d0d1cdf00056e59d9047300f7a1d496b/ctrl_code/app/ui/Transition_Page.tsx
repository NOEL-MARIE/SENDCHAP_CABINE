"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        exit={{ rotateX: -90, opacity: 0, scale: 0.8 }}
        transition={{
          ease: [0.25, 1, 0.5, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
