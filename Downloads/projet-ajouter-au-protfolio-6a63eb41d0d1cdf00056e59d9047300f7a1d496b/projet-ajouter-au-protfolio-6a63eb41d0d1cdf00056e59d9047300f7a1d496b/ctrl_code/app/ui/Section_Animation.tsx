"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  animationType: "fadeUp" | "fadeOval" | "fadeLeft";
  bgColor: string;
};

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeOval: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[animationType]}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative   rounded-lg mb-24 overflow-hidden"
    //   style={{ backgroundColor: bgColor }}
    >
      {/* Background animé (exemple ovales) */}
      <span
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 animate-oval bg-primary_folio`}
      />
      
      <span
        className={`absolute -bottom-20 -right-24 w-96 h-96 rounded-full opacity-15 animate-oval-slow bg-primary_folio`}
      />

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};
